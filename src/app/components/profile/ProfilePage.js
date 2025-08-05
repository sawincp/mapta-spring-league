"use client";

import Performance from "./Performance";
import MatchCard from "./MatchCard";
import Nav from "react-bootstrap/Nav";
import styles from "../../styles/profile.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

function ProfilePage() {
  return (
    <div>
      <div className={styles.profileContent}>
        <IoPersonCircleOutline size="75px" />
        <div className={styles.profileText}>
          <h2>Corey Sawin</h2>
          <p>M • 36 • Chesterbrook, PA</p>
          <p>Picket Post • Right Handed</p>
        </div>
        <Nav className={styles.nav}>
          <Nav.Link href="/account">
            <FaRegEdit />
          </Nav.Link>
        </Nav>
      </div>
      <div className={styles.navContainer}>
        <Nav
          variant="underline"
          defaultActiveKey="/profile"
          className={styles.nav}
        >
          <Nav.Item>
            <Nav.Link href="/profile" className="active">
              Performance
            </Nav.Link>
            <Performance />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/activity">Activity</Nav.Link>
            <MatchCard />
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}
export default ProfilePage;
