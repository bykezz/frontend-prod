import { Input } from "@chakra-ui/react";
import styles from "./CreateNewPassword.module.css";

const CreateNewPassword = () => {
  return (
    <div className={styles.createNewPassword}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.createNewPassword1}>Create New Password</div>
        <Input
          className={styles.groupItem}
          placeholder="New Password"
          width="400px"
          w="400px"
        />
        <div className={styles.groupInner} />
        <Input
          className={styles.rectangleInput}
          placeholder="Confirm Password"
          width="400px"
          w="400px"
        />
        <button className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.confirm}>Confirm</div>
        </button>
      </div>
    </div>
  );
};

export default CreateNewPassword;
