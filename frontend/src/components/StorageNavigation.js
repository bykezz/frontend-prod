import { useMemo, useCallback } from "react";
import styles from "./StorageNavigation.module.css";
import { useNavigate } from "react-router-dom";
const StorageNavigation = ({
  storageNavigationPosition,
  storageNavigationTop,
  storageNavigationLeft,
}) => {
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

  const onGroupButton5Click = useCallback(() => {
    navigate("/track-order");
  }, [navigate]);

  const onFarmjointLogo2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const storageNavigationStyle = useMemo(() => {
    return {
      position: storageNavigationPosition,
      top: storageNavigationTop,
      left: storageNavigationLeft,
    };
  }, [storageNavigationPosition, storageNavigationTop, storageNavigationLeft]);

  return (
    <div className={styles.storageNavigation} style={storageNavigationStyle}>
      <div className={styles.storageNavigationChild} />
      <div className={styles.groupParent}>
        <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
          <div className={styles.groupChild} />
          <img
            className={styles.antDesignhomeOutlinedIcon}
            alt=""
            src="/antdesignhomeoutlined.svg"
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
            src="/claritystoreline2.svg"
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
        <button className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.storage}>Storage</div>
          <img
            className={styles.claritystoreLineIcon}
            alt=""
            src="/mdisilooutline1.svg"
          />
        </button>

        <button
          className={styles.rectangleParent}
          onClick={onGroupButton5Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.bulkOrders}>Track Order</div>
          <img className={styles.carbonmapIcon} alt="" src="/carbonmap.svg" />
        </button>
      </div>
      <button
        className={styles.farmjointLogo3}
        onClick={onFarmjointLogo2Click}
      />
    </div>
  );
};

export default StorageNavigation;
