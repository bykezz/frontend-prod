import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import styles from "./StorageFacility.module.css";
import StorageFaciilityCard from "./StorageFacilityCard";

const StorageFacility = () => {
  const navigate = useNavigate();
  const [facilities, setFacilities] = useState([]);
  const { token } = useAuth();

  const onGroupButton1Click = useCallback(() => {
    navigate("/storage-dashboard-profile");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/storage-dashboard-add-new-facility");
  }, [navigate]);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .get("http://13.53.125.166/storage/my_facilities/")
      .then((response) => {
        setFacilities(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.storageFacility}>
      <div className={styles.storageFacilityChild} />
      <button className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.facility}>Facility</div>
      </button>
      <button className={styles.profileWrapper} onClick={onGroupButton1Click}>
        <div className={styles.profile}>Profile</div>
      </button>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          width: "100%",
          height: "auto",
          top: "80px",
        }}
      >
        {facilities.map((facility) => (
          <StorageFaciilityCard key={facility.id} facility={facility} />
        ))}
      </div>
      <button className={styles.rectangleGroup} onClick={onGroupButton2Click}>
        <div className={styles.groupItem} />
        <div className={styles.addNewFacility}>Add New Facility</div>
      </button>
    </div>
  );
};

export default StorageFacility;
