import MatchCard from "./matchCard";

import styles from "./Performance.module.css";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

export default function Performance() {
  return (
    <div className={styles.performanceContainer}>
      <div className={styles.performanceHeaders}>
        <h3>Rating</h3>
        <MatchCard />
      </div>
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
