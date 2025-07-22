'use client'

import styles from "../../styles/login.module.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import SignUpModal from "./SignUpModal";

 const SingUpPage = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
  
    <div className={styles.logincontainer}>
      <div className={styles.loginCard}>
        <>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Signup
          </Button>

          <SignUpModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
      </div>
    </div>

  );
};
export default SingUpPage;