import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavigation from "../components/DashboardNavigation";
import SearchBar from "../components/SearchBar";
import styles from "./FarmersDashboardMainMessage.module.css";

const FarmersDashboardMainMessage = () => {
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
    <div className={styles.farmersDashboardMainMessage}>
      <SearchBar
        dimensionText="/phuserlight3.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.4%"
      />
      <div className={styles.farmersMessageContent}>
        <div className={styles.farmersMessageContentChild} />
        <div className={styles.farmersMessageContentItem} />
        <b className={styles.newPurchaseAlert}>New purchase alert!</b>
        <div className={styles.farmersMessageContentInner} />
        <div className={styles.helloSunnyFarms}>
          Hello Sunny Farms, a purchase has just been made for products on your
          farm. Here are the details.
        </div>
        <div className={styles.customerNameChickenContainer}>
          <b>Customer Name:</b>
          <span> Chicken Republic</span>
        </div>
        <div className={styles.customerAddressLagosContainer}>
          <b>Customer Address:</b>
          <span> Lagos, Nigeria</span>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.maize}>Maize</div>
        <div className={styles.beans}>Beans</div>
        <div className={styles.cassava}>Cassava</div>
        <div className={styles.rice}>Rice</div>
        <div className={styles.bags}>100 bags</div>
        <div className={styles.n500000}>N500,000</div>
        <div className={styles.n2500000}>N2,500,000</div>
        <div className={styles.n1000000}>N1,000,000</div>
        <div className={styles.n10000001}>N1,000,000</div>
        <div className={styles.bags1}>50 bags</div>
        <div className={styles.bags2}>50 bags</div>
        <div className={styles.bags3}>20 bags</div>
        <b className={styles.sn}>SN.</b>
        <b className={styles.product}>Product</b>
        <b className={styles.quantity}>Quantity</b>
        <b className={styles.price}>Price</b>
        <b className={styles.b}>1</b>
        <b className={styles.b1}>2</b>
        <b className={styles.b2}>3</b>
        <b className={styles.b3}>4</b>
        <div className={styles.lineDiv} />
        <div className={styles.farmersMessageContentChild1} />
        <div className={styles.farmersMessageContentChild2} />
        <div className={styles.farmersMessageContentChild3} />
      </div>
      <div className={styles.dashboardNavigation}>
        <DashboardNavigation
          imageDimensions="/antdesignhomeoutlined2.svg"
          imageDimensionsText="/claritystoreline8.svg"
          imageDimensionsCode="/fa6solidtruckfast4.svg"
          imageDimensionsCodeText="/mdisilooutline3.svg"
          imageDimensionsTextCode="/healthiconsfruitsoutline9.svg"
          imageDimensionsTextCode2="/carbonmap5.svg"
          onGroupButton2Click={onGroupButton2Click}
          onGroupButton3Click={onGroupButton3Click}
          onGroupButton4Click={onGroupButton4Click}
          onGroupButton5Click={onGroupButton5Click}
          onGroupButton6Click={onGroupButton6Click}
          onGroupButton7Click={onGroupButton7Click}
        />
      </div>
    </div>
  );
};

export default FarmersDashboardMainMessage;
