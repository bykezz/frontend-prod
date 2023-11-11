import styles from "./ResetPasswordMail.module.css";

const ResetPasswordMail = () => {
  return (
    <div className={styles.resetPasswordMail}>
      <div className={styles.resetPasswordMailInner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.aResetLink}>
        A reset link has been sent to your email address. Click it to rest your
        password.
      </div>
    </div>
  );
};

export default ResetPasswordMail;
