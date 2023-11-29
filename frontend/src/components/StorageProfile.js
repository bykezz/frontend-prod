import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StorageProfile.module.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useStorageProfile } from "../context/StorageProfileContext";

const StorageProfile = ({ setEdit }) => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const {
    street3,
    city3,
    state3,
    email3,
    storageName,
    setStorageName,
    setEditedStorageName,
  } = useStorageProfile();

  const onFacilityClick = useCallback(() => {
    navigate("/facility-owner-2");
  }, [navigate]);

  const editHandle = () => {
    setEdit(true);
  };

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    const api = "http://127.0.0.1:8000/storage/my_profile/";

    axios
      .get(api)
      .then((response) => {
        const Data = response.data;
        setStorageName(Data.storage_name);
        setEditedStorageName({
          storage_name: Data.storage_name,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className={styles.storageProfile}>
      <div className={styles.storageProfileChild} />
      <button className={styles.facility} onClick={onFacilityClick}>
        Facility
      </button>
      <div className={styles.nameOfFacility}>
        Name of facility: {storageName}
      </div>
      <div className={styles.emailKanistoragegmailcom}>Email: {email3}</div>
      <div className={styles.officeAddressArea}>
        Office Address: {street3 ? `${street3}, ${city3}, ${state3}.` : ""}
      </div>
      <button className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.profile}>Profile</div>
      </button>

      <button className={styles.rectangleGroup} onClick={editHandle}>
        <div className={styles.groupChild} />
        <div className={styles.editProfile}>Edit Profile</div>
      </button>
    </div>
  );
};

export default StorageProfile;
