"use client";

import Performance from "../components/profile/Performance";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/profile.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";

function Profile() {


  return (
    <div>
      <div className={styles.profileContent}>
        <IoPersonCircleOutline size="75px" />
        <div className={styles.profileText}>
          <h2>Corey Sawin</h2>
          <p>M • 36 • Chesterbrook, PA</p>
          <p>Picket Post</p>
        </div>
      </div>
      <div>
        <Nav variant="underline" defaultActiveKey="/profile" className= {styles.nav}>
          <Nav.Item>
            <Nav.Link href="/profile" className="active">
              Performance
            </Nav.Link>
          <Performance/>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/activity">
              Activity
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default Profile;
