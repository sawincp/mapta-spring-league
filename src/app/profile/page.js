"use client";

import Performance from "./performance";
import Nav from "react-bootstrap/Nav";
import styles from "./Profile.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";

function Profile() {
  const linkStyle = {
    color: "white",
    marginTop: "50px",
  };

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
        <Nav variant="underline">
          <Nav.Item>
            <Nav.Link href="/profile" style={linkStyle}>
              Performance
            </Nav.Link>
          <Performance/>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/activity" style={linkStyle}>
              Activity
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default Profile;
