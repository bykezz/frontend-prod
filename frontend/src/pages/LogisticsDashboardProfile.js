import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogisticsProfile from "../components/LogisticsProfile";
import DashboardNavigation from "../components/DashboardNavigation";
import SearchBar from "../components/SearchBar";
import EditProfileLogistics from "../components/EditProfileLogistics";
import Footer from "../components/Footer";
import styles from "./LogisticsDashboardProfile.module.css";
const LogisticsDashboardProfile = () => {
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

  const [isEdit, setEdit] = useState(false);

  return (
    <div className={styles.logisticsDashboardProfile}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        {!isEdit && <LogisticsProfile setEdit={setEdit} />}
        {isEdit && <EditProfileLogistics setEdit={setEdit} />}

        <footer className={styles.footer} id="footer">
          <Footer />
        </footer>
      </div>
      <DashboardNavigation
        imageDimensions="/antdesignhomeoutlined.svg"
        imageDimensionsText="/claritystoreline2.svg"
        imageDimensionsCode="/fa6solidtruckfast.svg"
        imageDimensionsCodeText="/mdisilooutline.svg"
        imageDimensionsTextCode="/healthiconsfruitsoutline.svg"
        imageDimensionsTextCode2="/carbonmap.svg"
        onGroupButton2Click={onGroupButton2Click}
        onGroupButton3Click={onGroupButton3Click}
        onGroupButton4Click={onGroupButton4Click}
        onGroupButton5Click={onGroupButton5Click}
        onGroupButton6Click={onGroupButton6Click}
        onGroupButton7Click={onGroupButton7Click}
      />
      <SearchBar
        dimensionText="/phuserlight.svg"
        dimensionText2="/bibasketfill.svg"
      />
    </div>
  );
};

export default LogisticsDashboardProfile;
