import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SuccessfulVerificationMessage.module.css";
const SuccessfulVerificationMessage = ({ onClose }) => {
  const navigate = useNavigate();

  const onProceedClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.successfulVerificationMessag}>
      <div className={styles.successfulVerificationMessagChild} />
      <button className={styles.proceed} onClick={onProceedClick}>
        <span className={styles.proceed1}>proceed</span>
        <span className={styles.span}>{` `}</span>
      </button>
      <div className={styles.youHaveSuccessfullyContainer}>
        <p className={styles.youHaveSuccessfully}>
          You have successfully being verified. Kindly
        </p>
        <p className={styles.youHaveSuccessfully}>{` `}</p>
      </div>
      <div className={styles.toCompleteYour}>
        to complete your registration, and SETUP your profile.
      </div>
    </div>
  );
};

export default SuccessfulVerificationMessage;
