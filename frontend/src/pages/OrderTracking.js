import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MapLocation from "../components/MapLocation";
import OrderStatus from "../components/OrderStatus";
import TrackOrderNavigation from "../components/TrackOrderNavigation";
import SearchBar from "../components/SearchBar";
import styles from "./OrderTracking.module.css";
import Footer from "../components/Footer";

const OrderTracking = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onGroupButton0Click = useCallback(() => {
    navigate("/farmers-deals");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/storage");
  }, [navigate]);

  const onFarmjointLogo2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.orderTracking}>
      <div className={styles.liveLocationParent}>
        <div className={styles.liveLocation}>
          <div className={styles.liveLocationChild} />
        </div>

        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.jul20}>Jul 20</div>
          <div className={styles.n57800}>N57,800</div>
          <div className={styles.lagos}>Lagos</div>
          <div className={styles.div}>#247753</div>
          <div className={styles.frameWrapper}>
            <div className={styles.orderPlacedParent}>
              <div className={styles.orderPlaced}>ORDER PLACED</div>
              <div className={styles.total}>TOTAL</div>
              <div className={styles.shipTo}>SHIP TO</div>
              <div className={styles.order}>ORDER #</div>
            </div>
          </div>
        </div>
        <MapLocation />
        <OrderStatus />
        <footer className={styles.footer} id="footer">
          <Footer />
        </footer>
      </div>
      <TrackOrderNavigation
        imageDimensions="/antdesignhomeoutlined2.svg"
        imageDimensionsText="/claritystoreline1.svg"
        imageDimensionsCode="/healthiconsfruitsoutline1.svg"
        onGroupButtonClick={onGroupButtonClick}
        onGroupButton0Click={onGroupButton0Click}
        onGroupButton1Click={onGroupButton1Click}
        onGroupButton2Click={onGroupButton2Click}
        onGroupButton3Click={onGroupButton3Click}
        onFarmjointLogo2Click={onFarmjointLogo2Click}
      />
      <SearchBar
        dimensionText="/phuserlight4.svg"
        dimensionText2="/bibasketfill1.svg"
        propRight="5.4%"
      />
    </div>
  );
};

export default OrderTracking;
