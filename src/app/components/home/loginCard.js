import Card from "react-bootstrap/Card";
import styles from "./LoginCard.module.css";
import { MdAccountCircle } from "react-icons/md";

export default function LoginCard() {
  return (
    <div className={styles.cardContainer}>
      <Card body className={styles.card}>
        <MdAccountCircle size="30px"/>
        Corey Sawin | PTI: 31.0 | Team: Freddators
      </Card>
    </div>
  );
}
