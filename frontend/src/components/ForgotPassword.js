import { useState, useCallback } from "react";
import { Input } from "@chakra-ui/react";
import ResetPasswordMail from "./ResetPasswordMail";
import PortalPopup from "./PortalPopup";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [isResetPasswordMailOpen, setResetPasswordMailOpen] = useState(false);
  const [isResetOpen, setResetOpen] = useState(true);

  const openResetPasswordMail = useCallback(() => {
    setResetPasswordMailOpen(true);
    setResetOpen(false);
  }, []);

  const closeResetPasswordMail = useCallback(() => {
    setResetPasswordMailOpen(false);
    setResetOpen(true);
  }, []);

  return (
    <>
      {isResetOpen && (
        <div className={styles.forgotPassword}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.resetPassword}>Reset Password</div>
            <Input
              className={styles.groupItem}
              placeholder="Email Address"
              width="400px"
              w="400px"
            />
            <button
              className={styles.groupWrapper}
              onClick={openResetPasswordMail}
            >
              <div className={styles.rectangleGroup}>
                <div className={styles.groupInner} />
                <div className={styles.resetPassword1}>Reset Password</div>
              </div>
            </button>
          </div>
          <div className={styles.ifYouClick}>
            If you click “Reset Password”, a link will be sent to your email
            address registered with us.
          </div>
        </div>
      )}
      {isResetPasswordMailOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeResetPasswordMail}
        >
          <ResetPasswordMail onClose={closeResetPasswordMail} />
        </PortalPopup>
      )}
    </>
  );
};

export default ForgotPassword;
