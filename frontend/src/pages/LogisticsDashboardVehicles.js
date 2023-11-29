import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavigation from "../components/DashboardNavigation";
import LogisticsVehicles from "../components/LogisticsVehicles";
import SearchBar from "../components/SearchBar";
import styles from "./LogisticsDashboardVehicles.module.css";

const LogisticsDashboardVehicles = () => {
  const navigate = useNavigate();
  const onGroupButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onGroupButton4Click = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onGroupButton5Click = useCallback(() => {
    navigate("/storage");
  }, [navigate]);
  const onGroupButton6Click = useCallback(() => {
    navigate("/farmers-deals");
  }, [navigate]);

  const onGroupButton7Click = useCallback(() => {
    navigate("/track-order");
  }, [navigate]);

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
      <DashboardNavigation
        onGroupButton2Click={onGroupButton2Click}
        onGroupButton3Click={onGroupButton3Click}
        onGroupButton4Click={onGroupButton4Click}
        onGroupButton5Click={onGroupButton5Click}
        onGroupButton6Click={onGroupButton6Click}
        onGroupButton7Click={onGroupButton7Click}
      />
    </div>
  );
};

export default LogisticsDashboardVehicles;
