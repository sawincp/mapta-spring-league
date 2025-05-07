"use client";

import LoginCard from "./components/home/loginCard";
import Table from "react-bootstrap/Table";
import styles from "./Table.module.css";
import { Roboto_Mono } from "next/font/google";

import Nav from "react-bootstrap/Nav";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const linkStyle = {
  color: "white",
};

export default function Home() {
  return (
    <div className={styles["table-container"]}>
      <div className={styles["standings-header"]}>
        <h1>STANDINGS</h1>
        <Nav activeKey="/" variant="underline">
          <Nav.Item>
            <Nav.Link href="/" style={linkStyle}>
              Division 1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/division2" style={linkStyle}>
              Division 2
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Table className={styles["standings-table"]} bordered={false} hover>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Team</th>
            <th>Points</th>
            <th>Weeks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Freddorators</td>
            <td>33</td>
            <td>4/4</td>
          </tr>
          <tr>
            <td></td>
            <td>Grovesters</td>
            <td>29</td>
            <td>4/4</td>
          </tr>
        </tbody>
      </Table>
      <LoginCard />
    </div>
  );
}
