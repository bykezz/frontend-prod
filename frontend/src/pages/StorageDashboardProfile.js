import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StorageProfile from "../components/StorageProfile";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import DashboardNavigation from "../components/DashboardNavigation";
import styles from "./StorageDashboardProfile.module.css";
import EditProfileStorage from "../components/EditProfileStorage";

const StorageDashboardProfile = () => {
  const navigate = useNavigate();
  const [isEdit, setEdit] = useState(false);

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
    <div className={styles.storageDashboardProfile}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        {!isEdit && <StorageProfile setEdit={setEdit} />}
        {isEdit && <EditProfileStorage setEdit={setEdit} />}

        <footer className={styles.footer} id="footer">
          <Footer />
        </footer>
      </div>
      <SearchBar
        dimensionText="/phuserlight.svg"
        dimensionText2="/bibasketfill.svg"
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

export default StorageDashboardProfile;
