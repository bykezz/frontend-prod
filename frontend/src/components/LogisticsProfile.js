import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./LogisticsProfile.module.css";
import { useAuth } from "../context/AuthContext";
import { useLogisticsProfile } from "../context/LogisticsProfileContext";

const LogisticsProfile = ({ setEdit }) => {
  const navigate = useNavigate();
  const {
    email2,
    street2,
    city2,
    state2,
    logisticsName,
    setLogisticsName,
    setEditedLogisticsName,
  } = useLogisticsProfile();
  const { token } = useAuth();

  const onVehiclesClick = useCallback(() => {
    navigate("/logistics-2");
  }, [navigate]);

  const editHandle = () => {
    setEdit(true);
  };
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    const api = "http://127.0.0.1:8000/logistics/my_profile/";

    axios
      .get(api)
      .then((response) => {
        const Data = response.data;
        setLogisticsName(Data.logistics_name);
        setEditedLogisticsName({
          logistics_name: Data.logistics_name,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className={styles.logisticsProfile}>
      <div className={styles.logisticsProfileChild} />
      <button className={styles.vehicles} onClick={onVehiclesClick}>
        Vehicles
      </button>
      <div className={styles.nameOfLogistics}>
        Name of logistics: {logisticsName}
      </div>
      <div className={styles.emailTranslogisticsgmailco}>Email: {email2}</div>
      <div className={styles.officeAddressArea}>
        Office Address: {street2 ? `${street2}, ${city2}, ${state2}.` : ""}
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

export default LogisticsProfile;
