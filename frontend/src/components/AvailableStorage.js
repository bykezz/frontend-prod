import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StorageCard from "./StorageCard";
import styles from "./AvailableStorage.module.css";
import { useSearch } from "../context/SearchContext";

const AvailableStorage = () => {
  const navigate = useNavigate();
  const { facilities1, setFacilities1 } = useSearch();

  const onStorageCardClick = useCallback(() => {
    navigate("/storage-detail");
  }, [navigate]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/storage/all_facilities/")
      .then((response) => {
        setFacilities1(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching logistics data:", error);
      });
  }, []);

  return (
    <div className={styles.availableStorage}>
      <div className={styles.storagesAvailable}>
        <span className={styles.storages}>Storage Facilities</span>
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
        {facilities1.map((facility) => (
          <StorageCard
            key={facility.id}
            facility={facility}
            facilityImage={`http://127.0.0.1:8000${facility.storage_images[0].image}`}
            onStorageCardClick={onStorageCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailableStorage;
