import styles from "./ThankYouMessage2.module.css";

const ThankYouMessage2 = ({ onClose }) => {
  return (
    <div className={styles.thankYouMessage2}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.thankYouAnContainer}>
          <p className={styles.thankYou}>Thank you!</p>
          <p className={styles.anEmailWill}>
            An email will be sent to you as soon as your verification is
            confirmed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouMessage2;
