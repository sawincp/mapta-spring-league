"use client";

import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <h1>Profile</h1>
        <p>Corey Sawin</p>
      </div>
    </div>
  );
}

export default Profile;
