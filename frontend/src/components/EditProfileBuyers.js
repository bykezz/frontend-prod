import "antd/dist/antd.min.css";
import { Input } from "antd";
import styles from "./EditProfileBuyers.module.css";
import { useCustomerProfile } from "../context/CustomerProfileContext";
import { useFarmerProfile } from "../context/FarmerProfileContext";

const EditProfileBuyers = () => {
  const { editedUsername, setEditedUsername } = useFarmerProfile();
  const { editedAddress, setEditedAddress } = useCustomerProfile();
  return (
    <div className={styles.editProfileBuyers}>
      <div className={styles.editProfileBuyersChild} />
      <div className={styles.editProfile}>Edit Profile</div>
      <div className={styles.name}>Firstname:</div>
      <Input
        className={styles.editProfileBuyersItem}
        type="text"
        style={{ width: "258px" }}
        size="large"
        value={editedUsername.first_name}
        onChange={(e) =>
          setEditedUsername({
            ...editedUsername,
            first_name: e.target.value,
          })
        }
      />
      <Input
        className={styles.editProfileBuyersInner}
        type="text"
        style={{ width: "258px" }}
        size="large"
        value={editedUsername.last_name}
        onChange={(e) =>
          setEditedUsername({
            ...editedUsername,
            last_name: e.target.value,
          })
        }
      />
      <Input
        className={styles.rectangleInput}
        type="text"
        style={{ width: "258px" }}
        size="large"
        value={editedAddress.street}
        onChange={(e) =>
          setEditedAddress({
            ...editedAddress,
            street: e.target.value,
          })
        }
      />
      <Input
        className={styles.rectangleInput1}
        type="text"
        style={{ width: "258px" }}
        size="large"
        value={editedAddress.city}
        onChange={(e) =>
          setEditedAddress({
            ...editedAddress,
            city: e.target.value,
          })
        }
      />
      <Input
        className={styles.rectangleInput2}
        type="text"
        style={{ width: "258px" }}
        size="large"
        value={editedAddress.state}
        onChange={(e) =>
          setEditedAddress({
            ...editedAddress,
            state: e.target.value,
          })
        }
      />
      <div className={styles.email}>Lastname:</div>
      <div className={styles.address}>Address</div>
      <div className={styles.address1}>Street:</div>
      <div className={styles.address2}>City:</div>
      <div className={styles.address3}>State:</div>
    </div>
  );
};

export default EditProfileBuyers;
