import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfileStorage.module.css";
import { useStorageProfile } from "../context/StorageProfileContext";
import { useCustomerProfile } from "../context/CustomerProfileContext";
const EditProfileStorage = ({ setEdit }) => {
  const { token } = useAuth();
  const {
    editedStorageName,
    setEditedStorageName,
    setStreet3,
    setCity3,
    setState3,
    setStorageName,
  } = useStorageProfile();

  const { editedAddress, setEditedAddress } = useCustomerProfile();

  const editHandle = () => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .put("http://127.0.0.1:8000/storage/my_profile/", editedStorageName)
      .then((response) => {
        console.log("Profile updated successfully", response.data);
        setStorageName(response.data.storage_name);
      });

    axios
      .post("http://127.0.0.1:8000/address/", editedAddress)
      .then((response) => {
        console.log("Profile updated successfully", response.data);
        setStreet3(response.data.street);
        setCity3(response.data.city);
        setState3(response.data.state);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
    setEdit(false);
  };

  return (
    <div className={styles.editProfileStorage}>
      <div className={styles.editProfileStorageChild} />
      <div className={styles.editProfile}>Edit Profile</div>
      <div className={styles.nameOfFacility}>Name of facility:</div>
      <Input
        className={styles.editProfileStorageItem}
        type="text"
        style={{ width: "258px" }}
        size="large"
        value={editedStorageName.storage_name}
        onChange={(e) =>
          setEditedStorageName({
            ...editedStorageName,
            storage_name: e.target.value,
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

      <div className={styles.officeAddress}>Office Address</div>
      <div className={styles.officeAddress1}>Street:</div>
      <div className={styles.officeAddress2}>City:</div>
      <div className={styles.officeAddress3}>State:</div>
      <button className={styles.rectangleGroup} onClick={editHandle}>
        <div className={styles.groupChild} />
        <div className={styles.save}>Save</div>
      </button>
    </div>
  );
};

export default EditProfileStorage;
