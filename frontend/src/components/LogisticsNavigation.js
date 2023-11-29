import { useMemo, useCallback } from "react";
import styles from "./LogisticsNavigation.module.css";
import { useNavigate } from "react-router-dom";
const LogisticsNavigation = ({
  logisticsStoragePosition,
  logisticsStorageTop,
  logisticsStorageLeft,
}) => {
  const logisticsStorageStyle = useMemo(() => {
    return {
      position: logisticsStoragePosition,
      top: logisticsStorageTop,
      left: logisticsStorageLeft,
    };
  }, [logisticsStoragePosition, logisticsStorageTop, logisticsStorageLeft]);
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

  const onGroupButton3Click = useCallback(() => {
    navigate("/storage");
  }, [navigate]);

  const onGroupButton5Click = useCallback(() => {
    navigate("/track-order");
  }, [navigate]);

  const onFarmjointLogo2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.logisticsStorage} style={logisticsStorageStyle}>
      <div className={styles.logisticsStorageChild} />
      <div className={styles.groupParent}>
        <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
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
          onClick={onGroupButton0Click}
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
          onClick={onGroupButton1Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.marketplace}>Marketplace</div>
          <img
            className={styles.claritystoreLineIcon}
            alt=""
            src="/claritystoreline1.svg"
          />
        </button>
        <button className={styles.rectangleParent}>
          <div className={styles.groupInner} />
          <div className={styles.logistics}>Logistics</div>
          <img
            className={styles.fa6SolidtruckFastIcon}
            alt=""
            src="/fa6solidtruckfast5.svg"
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
            src="/mdisilooutline1.svg"
          />
        </button>

        <button
          className={styles.rectangleParent}
          onClick={onGroupButton5Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.bulkOrders}>Track Order</div>
          <img className={styles.carbonmapIcon} alt="" src="/carbonmap1.svg" />
        </button>
      </div>
      <button
        className={styles.farmjointLogo2}
        onClick={onFarmjointLogo2Click}
      />
    </div>
  );
};

export default LogisticsNavigation;
