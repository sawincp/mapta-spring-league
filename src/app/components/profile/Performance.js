import styles from "../../styles/performance.module.css";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

export default function Performance() {
  return (
    <div className={styles.performanceContainer}>
      <h3 className={styles.ratingHeader}>Rating</h3>
      <div className={styles.performanceRow}>
        <GoThumbsup size="20px" />
        <span>Wins:</span>
      </div>
      <div className={styles.performanceRow}>
        <GoThumbsdown size="20px" />
        <span>Losses:</span>
      </div>
      <div className={styles.performanceRow}>
        <MdOutlinePeopleOutline size="20px" />
        <span>Avg Partner:</span>
      </div>
      <div className={styles.performanceRow}>
        <IoPersonOutline size="20px" />
        <span>Avg Opponent:</span>
      </div>
    </div>
  );
}
