import styles from "./EmailVerificationMessage.module.css";
const EmailVerificationMessage = ({ onClose }) => {
  return (
    <div className={styles.emailVerificationMessage}>
      <div className={styles.emailVerificationMessageChild} />
      <div className={styles.toCompleteYour}>
        To complete your registration, kindly click the verification link sent
        to your email.
      </div>
    </div>
  );
};

export default EmailVerificationMessage;
