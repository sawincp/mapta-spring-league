"use client";

import LoginModal from "./LoginModal";
import styles from "../../styles/login.module.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const LoginPage = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={styles.logincontainer}>
      <div className={styles.loginCard}>
        <>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button>

          <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
      </div>
    </div>
  );
};

export default LoginPage;
