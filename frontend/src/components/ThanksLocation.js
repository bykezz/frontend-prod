import { useCallback } from "react";
import styles from "./ThanksLocation.module.css";

const GroupComponent1 = ({ onClose }) => {
  const onGroupPopupClick = useCallback(() => {
    // Please sync "Goelocation" to the project
  }, []);

  return (
    <div className={styles.rectangleParent} onClick={onGroupPopupClick}>
      <div className={styles.groupChild} />
      <div className={styles.thankYouYour}>
        Thank you, your request has been sent and we are currently working on
        it.
      </div>
    </div>
  );
};

export default GroupComponent1;
