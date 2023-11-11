import { useCallback } from "react";
import styles from "./ThanksSaved.module.css";

const ThanksSaved = (onOpen) => {
  const onGroupPopupClick = useCallback(() => {
    // Please sync "Buyer's page 3" to the project
  }, []);

  return (
    <div className={styles.rectangleParent} onClick={onGroupPopupClick}>
      <div className={styles.groupChild} />
      <div className={styles.thankYouYour}>
        Thank you, your location has been saved.
      </div>
    </div>
  );
};

export default ThanksSaved;
