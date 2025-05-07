"use client";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import styles from "./LoginCard.module.css";
import Image from "next/image";
import logo from "../../assets/account_person.png";
import { RiDashboard2Line } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";



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
            <Button variant="outline-light">
              <Nav.Link href="/dashboard" className="d-flex align-items-center">
                <RiDashboard2Line className="me-2" size={25} />
              Performnce
              </Nav.Link>
            </Button>
            <Button variant="outline-light">
              <Nav.Link href="/logout" className="d-flex align-items-center">
                <BiLogOut className="me-2" size={25} />
              Logout
              </Nav.Link>
            </Button>
          </Nav>
        </div>
      </Card>
    </div>
  );
}
