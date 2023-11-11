import styles from "./TrackOrderNavigation.module.css";
const TrackOrderNavigation = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsCode,
  onGroupButtonClick,
  onGroupButton0Click,
  onGroupButton1Click,
  onGroupButton2Click,
  onGroupButton3Click,
  onFarmjointLogo2Click,
}) => {
  return (
    <div className={styles.trackOrderNavigation}>
      <div className={styles.trackOrderNavigationChild} />
      <div className={styles.groupParent}>
        <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
          <div className={styles.groupChild} />
          <img
            className={styles.antDesignhomeOutlinedIcon}
            alt=""
            src={imageDimensions}
          />
          <div className={styles.home}>Home</div>
        </button>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton0Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.bulkOrders}>Farmers Deals</div>
          <img
            className={styles.healthiconsfruitsOutline}
            alt=""
            src="/healthiconsfruitsoutline1.svg"
          />
        </button>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton1Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.marketplace}>Marketplace</div>
          <img
            className={styles.claritystoreLineIcon}
            alt=""
            src={imageDimensionsText}
          />
        </button>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton2Click}
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
          onClick={onGroupButton3Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.storage}>Storage</div>
          <img
            className={styles.claritystoreLineIcon}
            alt=""
            src="/mdisilooutline.svg"
          />
        </button>

        <button className={styles.rectangleParent}>
          <div className={styles.groupChild2} />
          <div className={styles.trackOrder}>Track Order</div>
          <img className={styles.carbonmapIcon} alt="" src="/carbonmap8.svg" />
        </button>
      </div>
      <button
        className={styles.farmjointLogo2}
        onClick={onFarmjointLogo2Click}
      />
    </div>
  );
};

export default TrackOrderNavigation;
