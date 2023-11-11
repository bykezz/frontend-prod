import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./LogisticsVehicles.module.css";
import { useAuth } from "../context/AuthContext";
import LogisticsVehiclesCard from "./LogisticsVehiclesCard";

const LogisticsVehicles = () => {
  const navigate = useNavigate();
  const { token, userId } = useAuth();
  const [vehicles, setVehicles] = useState([]);
  const onGroupButton1Click = useCallback(() => {
    navigate("/logistics-dashboard-profile");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/logistics-dashboard-add-new-vehicles");
  }, [navigate]);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .get(`http://13.53.125.166/logistics/${userId}/vehicles/`)
      .then((response) => {
        setVehicles(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className={styles.logisticsVehicles}>
      <div className={styles.logisticsVehiclesChild} />
      <button className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.vehicles}>Vehicles</div>
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
        {vehicles.map((vehicle) => (
          <LogisticsVehiclesCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>

      <div className={styles.rectangleGroup} onClick={onGroupContainerClick}>
        <div className={styles.groupItem} />
        <div className={styles.addNewVehicle}>Add New Vehicle</div>
      </div>
    </div>
  );
};

export default LogisticsVehicles;
