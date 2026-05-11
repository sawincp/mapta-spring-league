import styles from "../styles/ratings.module.css";

const Ratings = () => {
  return (
    <div className={styles.ratings_Container}>
      <div className={styles.ratings_Header}>
        <h1>Ratings</h1>
      </div>
      <div className={styles.ratings_Content}>
        <p>Ratings content goes here...</p>
      </div>
    </div>
  );
};

export default Ratings;
