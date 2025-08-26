const { PrismaClient, Prisma } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // 1. Seed the Division table first
  const divisionData = [
    { name: 1 },
    { name: 2 },
    { name: 3 },
  ];
  const divisions = await Promise.all(
    divisionData.map(data => prisma.division.create({ data }))
  );
  console.log(`Seeded ${divisions.length} divisions.`);

  // 2. Seed the Location table
  const locationData = [
    {
      name: 'Picket Post',
      address: '1550 Bradford Road, Wayne, PA 19087',
      numberOfCourts: 4,
      comments: 'Court 1 and 2 lights turn off at 9pm, Courts 3 and 4 at 10pm',
    },
    {
      name: 'Conestoga',
      address: '501 Sproul Rd., Villanova, PA 19085',
      numberOfCourts: 4,
      comments: null,
    },
    {
      name: 'Martins Dam',
      address: '1045 Croton Road Wayne, PA 19087',
      numberOfCourts: 4,
      comments: null,
    },
  ];

  const locations = await Promise.all(
    locationData.map((data, index) =>
      prisma.location.create({
        data: {
          ...data,
          // Link location to a division using a round-robin approach
          divisionId: divisions[index % divisions.length].id,
        },
      })
    )
  );
  console.log(`Seeded ${locations.length} locations.`);

  // 3. Seed the User and Profile tables
  const userData = [
    { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com', password: 'pass1', currentRating: 4.8 },
    { firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', password: 'pass2', currentRating: 3.5 },
    { firstName: 'Charlie', lastName: 'Brown', email: 'charlie@example.com', password: 'pass3', currentRating: 4.0 },
    { firstName: 'Diana', lastName: 'Prince', email: 'diana@example.com', password: 'pass4', currentRating: 5.0 },
    { firstName: 'Ethan', lastName: 'Hunt', email: 'ethan@example.com', password: 'pass5', currentRating: 3.2 },
    { firstName: 'Fiona', lastName: 'Miller', email: 'fiona@example.com', password: 'pass6', currentRating: 4.1 },
  ];

  for (const [index, userDatum] of userData.entries()) {
    await prisma.user.create({
      data: {
        ...userDatum,
        // role: Prisma.Role.USER,
        locationId: locations[index % locations.length].id,
        divisionId: divisions[index % divisions.length].id,
        profile: {
          create: {
            phoneNumber: `555-555-${1000 + index}`,
            address: `${index + 1} Main St`,
            city: 'Anytown',
            state: 'USA',
            zipCode: 10000 + index,
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