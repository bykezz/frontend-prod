import { useCallback } from "react";
import styles from "./FilterBySizeStorage.module.css";
import { useSearch } from "../context/SearchContext";

const FilterBySizeStorage = ({ onClose }) => {
  const { setStorageSize } = useSearch();

  return (
    <div className={styles.filterBySizeStorage}>
      <div className={styles.filterBySize}>
        <div className={styles.filterBySizeChild} />
        <button
          className={styles.truckLoad}
          onClick={() => {
            setStorageSize("1-5 Truck load");
            onClose();
          }}
        >
          1-5 Truck-load
        </button>
        <button
          className={styles.truckLoad1}
          onClick={() => {
            setStorageSize("6-20 Truck..");
            onClose();
          }}
        >
          6-20 Truck-load
        </button>
        <button
          className={styles.truckLoad2}
          onClick={() => {
            setStorageSize("21-50 Truck..");
            onClose();
          }}
        >
          21-50 Truck-load
        </button>
      </div>
    </div>
  );
};

export default FilterBySizeStorage;
