"use client";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import styles from "./LoginCard.module.css";
import Image from "next/image";
import logo from "../../assetts/account_person.png"; // Fixed spelling of assets

export default function LoginCard() {
  return (
    <div className={styles.cardContainer}>
      <Card body className={styles.card}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="Logo"
            width={250}
            height={100}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <Card.Body className={styles.cardContent}>
          <Card.Text className={styles.text}>Corey Sawin | PTI: 31.0</Card.Text>
        </Card.Body>
        <div className={styles.navContainer}>
          <Nav>
            <Button variant="outline-light" >
              <Nav.Link href="/dashboard">Performnce</Nav.Link>
            </Button>
            <Button variant="outline-light">
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Button>
          </Nav>
        </div>
      </Card>
    </div>
  );
}
