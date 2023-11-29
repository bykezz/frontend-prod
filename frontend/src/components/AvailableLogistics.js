import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./AvailableLogistics.module.css";
import LogisticsFacilityCard from "./LogisticsFacilityCard";
import { useSearch } from "../context/SearchContext";

const AvailableLogistics = () => {
  const navigate = useNavigate();
  const { facilities, setFacilities } = useSearch();

  const onTransLogisticsCardClick = () => {
    navigate("/logistic-detail");
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/logistics/vehicles/")
      .then((response) => {
        setFacilities(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching logistics data:", error);
      });
  }, []);

  return (
    <div className={styles.availableLogistics}>
      <div className={styles.logisticsAvailable}>
        <span className={styles.logistics}>Logistics Facilities</span>
        <span className={styles.available}> Available</span>
      </div>
      <div
        className={styles.ProductList}
        style={{
          display: "flex",
          position: "relative",
          flexWrap: "wrap",
          top: "100px",
          gap: "15px",
          left: "15px",
          width: "100%",
          height: "auto",
        }}
      >
        {facilities.map((facility) => (
          <LogisticsFacilityCard
            key={facility.id}
            facility={facility}
            facilityImage={`http://127.0.0.1:8000${facility.logistics_images[0].image}`}
            onTransLogisticsCardClick={onTransLogisticsCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailableLogistics;
