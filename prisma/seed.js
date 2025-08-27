const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // 1. Seed Divisions
  const divisionData = [
    { name: 'Division 1' },
    { name: 'Division 2' },
    { name: 'Division 3' },
  ];

  const divisions = await Promise.all(
    divisionData.map(data => prisma.division.create({ data }))
  );
  console.log(`Seeded ${divisions.length} divisions.`);

  // 2. Seed Locations with many-to-many divisions
  const locationData = [
    {
      name: 'Picket Post',
      address: '1550 Bradford Road, Wayne, PA 19087',
      numberOfCourts: 4,
      comments: 'Court 1 and 2 lights turn off at 9pm, Courts 3 and 4 at 10pm',
      divisionIndexes: [0, 1], // Beginner + Intermediate
    },
    {
      name: 'Conestoga',
      address: '501 Sproul Rd., Villanova, PA 19085',
      numberOfCourts: 4,
      comments: null,
      divisionIndexes: [1, 2], // Intermediate + Advanced
    },
    {
      name: 'Martins Dam',
      address: '1045 Croton Road Wayne, PA 19087',
      numberOfCourts: 4,
      comments: null,
      divisionIndexes: [0, 2], // Beginner + Advanced
    },
  ];

  const locations = await Promise.all(
    locationData.map(data =>
      prisma.location.create({
        data: {
          name: data.name,
          address: data.address,
          numberOfCourts: data.numberOfCourts,
          comments: data.comments,
          divisions: {
            connect: data.divisionIndexes.map(i => ({ id: divisions[i].id })),
          },
        },
      })
    )
  );
  console.log(`Seeded ${locations.length} locations.`);

  // 3. Seed Users
  const userData = [
    { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com', password: 'pass1', currentRating: 4.8 },
    { firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', password: 'pass2', currentRating: 3.5 },
    { firstName: 'Charlie', lastName: 'Brown', email: 'charlie@example.com', password: 'pass3', currentRating: 4.0 },
    { firstName: 'Diana', lastName: 'Prince', email: 'diana@example.com', password: 'pass4', currentRating: 5.0 },
    { firstName: 'Ethan', lastName: 'Hunt', email: 'ethan@example.com', password: 'pass5', currentRating: 3.2 },
    { firstName: 'Fiona', lastName: 'Miller', email: 'fiona@example.com', password: 'pass6', currentRating: 4.1 },
  ];

  for (const [index, userDatum] of userData.entries()) {
    const hashedPassword = await bcrypt.hash(userDatum.password, 10);

    await prisma.user.create({
      data: {
        firstName: userDatum.firstName,
        lastName: userDatum.lastName,
        email: userDatum.email,
        hashedPassword,
        currentRating: userDatum.currentRating,
        role: 'USER',
        locationId: locations[index % locations.length].id,
        divisionId: divisions[index % divisions.length].id,
        profile: {
          create: {
            phoneNumber: `555-555-${1000 + index}`,
            address: `${index + 1} Main St`,
            city: 'Anytown',
            state: 'USA',
            zipCode: `${10000 + index}`,
          },
        },
      },
    });
    console.log(`Created user: ${userDatum.email}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
