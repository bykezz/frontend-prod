import styles from "./DashboardNavigation.module.css";
const DashboardNavigation = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsCode,
  imageDimensionsCodeText,
  imageDimensionsTextCode,
  imageDimensionsTextCode2,

  onGroupButton2Click,
  onGroupButton3Click,
  onGroupButton4Click,
  onGroupButton5Click,
  onGroupButton6Click,
  onGroupButton7Click,
}) => {
  return (
    <div className={styles.dashboardNavigation}>
      <div className={styles.dashboardNavigationChild} />
      <div className={styles.groupParent}>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton2Click}
        >
          <div className={styles.groupChild} />
          <img
            className={styles.antDesignhomeOutlinedIcon}
            alt=""
            src="/antdesignhomeoutlined2.svg"
          />
          <div className={styles.home}>Home</div>
        </button>

        <button
          className={styles.rectangleParent}
          onClick={onGroupButton6Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.bulkOrders}>Farmers' </div>
          <div className={styles.bulk}>Deals</div>
          <img
            className={styles.healthiconsfruitsOutline}
            alt=""
            src="/healthiconsfruitsoutline1.svg"
          />
        </button>

        <button
          className={styles.rectangleParent}
          onClick={onGroupButton3Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.marketplace}>Marketplace</div>
          <img
            className={styles.claritystoreLineIcon}
            alt=""
            src="/claritystoreline1.svg"
          />
        </button>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton4Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.logistics}>Logistics</div>
          <img
            className={styles.fa6SolidtruckFastIcon}
            alt=""
            src="/fa6solidtruckfast1.svg"
          />
        </button>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton5Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.storage}>Storage</div>
          <img
            className={styles.claritystoreLineIcon}
            alt=""
            src="/mdisilooutline1.svg"
          />
        </button>

        <button
          className={styles.rectangleParent}
          onClick={onGroupButton7Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.bulkOrders}>Track Order</div>
          <img className={styles.carbonmapIcon} alt="" src="/carbonmap1.svg" />
        </button>
      </div>
      <button className={styles.farmjointLogo2} />
    </div>
  );
};

export default DashboardNavigation;
