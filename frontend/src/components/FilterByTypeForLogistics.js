import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FilterByTypeForLogistics.module.css";
import { useSearch } from "../context/SearchContext";

const FilterByTypeForLogistics = ({ onClose }) => {
  const navigate = useNavigate();
  const { setLogisticsType } = useSearch();

  return (
    <div className={styles.filterByTypeForLogistics}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <button
          className={styles.trailers}
          onClick={() => {
            setLogisticsType("Trailers");
            onClose();
          }}
        >
          Trailers
        </button>
        <button
          className={styles.trucks}
          onClick={() => {
            setLogisticsType("Trucks");
            onClose();
          }}
        >
          Trucks
        </button>
        <button
          className={styles.ferries}
          onClick={() => {
            setLogisticsType("Ferries");
            onClose();
          }}
        >
          Ferries
        </button>
      </div>
    </div>
  );
};

export default FilterByTypeForLogistics;
