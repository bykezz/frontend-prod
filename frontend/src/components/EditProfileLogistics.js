import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useLogisticsProfile } from "../context/LogisticsProfileContext";
import styles from "./EditProfileLogistics.module.css";
import { useCustomerProfile } from "../context/CustomerProfileContext";

const EditProfileLogistics = ({ setEdit }) => {
  const { token } = useAuth();

  const {
    editedLogisticsName,
    setEditedLogisticsName,
    setStreet2,
    setCity2,
    setState2,
    setLogisticsName,
  } = useLogisticsProfile();

  const { editedAddress, setEditedAddress } = useCustomerProfile();

  const onGroupButtonClick = () => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .put("http://127.0.0.1:8000/logistics/my_profile/", editedLogisticsName)
      .then((response) => {
        console.log("Profile updated successfully", response.data);
        setLogisticsName(response.data.logistics_name);
      });

    axios
      .post("http://127.0.0.1:8000/address/", editedAddress)
      .then((response) => {
        console.log("Profile updated successfully", response.data);
        setStreet2(response.data.street);
        setCity2(response.data.city);
        setState2(response.data.state);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
    setEdit(false);
  };

  return (
    <div className={styles.editProfileLogistics}>
      <div className={styles.editProfileLogisticsChild} />
      <div className={styles.editProfile}>Edit Profile</div>
      <div className={styles.nameOfLogistics}>Name of logistics:</div>
      <Input
        className={styles.editProfileLogisticsItem}
        type="text"
        style={{ width: "258px" }}
        value={editedLogisticsName.logistics_name}
        onChange={(e) =>
          setEditedLogisticsName({
            ...editedLogisticsName,
            logistics_name: e.target.value,
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

      <button className={styles.rectangleGroup} onClick={onGroupButtonClick}>
        <div className={styles.groupChild} />
        <div className={styles.save}>Save</div>
      </button>
    </div>
  );
};

export default EditProfileLogistics;
