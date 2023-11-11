import LogisticsVehicles from "../components/LogisticsVehicles";
import SearchBar from "../components/SearchBar";
import styles from "./LogisticsDashboardVehicles.module.css";

const LogisticsDashboardVehicles = () => {
  return (
    <div className={styles.logisticsDashboardVehicles}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <LogisticsVehicles />
      </div>
      <SearchBar
        dimensionText="/phuserlight3.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.4%"
      />
    </div>
  );
};

export default LogisticsDashboardVehicles;
