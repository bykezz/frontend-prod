import { useCallback } from "react";
import styles from "./FilterBySizeLogistics.module.css";
import { useSearch } from "../context/SearchContext";

const FilterBySizeLogistics = ({ onClose }) => {
  const { setLogisticsSize } = useSearch();

  return (
    <div className={styles.filterBySizeLogistics}>
      <div className={styles.filterBySize}>
        <div className={styles.filterBySizeChild} />
        <button
          className={styles.kg}
          onClick={() => {
            setLogisticsSize("20 Kg");
            onClose();
          }}
        >
          20 Kg
        </button>
        <button
          className={styles.kg1}
          onClick={() => {
            setLogisticsSize("50 Kg");
            onClose();
          }}
        >
          50 Kg
        </button>
        <button
          className={styles.kgOrMore}
          onClick={() => {
            setLogisticsSize("100 Kg or more");
            onClose();
          }}
        >
          100 Kg or more
        </button>
      </div>
    </div>
  );
};

export default FilterBySizeLogistics;
