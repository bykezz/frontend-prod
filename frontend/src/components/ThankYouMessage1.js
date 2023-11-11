import styles from "./ThankYouMessage1.module.css";

const ThankYouMessage1 = ({ onClose }) => {
  return (
    <div className={styles.thankYouMessage1}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.thankYouYour}>
          Thank you, your request has been sent and we are currently working on
          it.
        </div>
      </div>
    </div>
  );
};

export default ThankYouMessage1;
