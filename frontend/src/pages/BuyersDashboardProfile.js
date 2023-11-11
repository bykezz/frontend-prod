import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import BuyersProfile from "../components/BuyersProfile";
import DashboardNavigation from "../components/DashboardNavigation";
import SearchBar from "../components/SearchBar";
import styles from "./BuyersDashboardProfile.module.css";

const BuyersDashboardProfile = () => {
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
    <div className={styles.buyersDashboardProfile}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <BuyersProfile />
        <footer className={styles.footer} id="footer">
          <Footer />
        </footer>
      </div>
      <DashboardNavigation
        imageDimensions="/antdesignhomeoutlined.svg"
        imageDimensionsText="/claritystoreline6.svg"
        imageDimensionsCode="/fa6solidtruckfast.svg"
        imageDimensionsCodeText="/mdisilooutline.svg"
        imageDimensionsTextCode="/healthiconsfruitsoutline12.svg"
        imageDimensionsTextCode2="/carbonmap4.svg"
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

export default BuyersDashboardProfile;
