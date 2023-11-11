import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MarketplaceNavigation.module.css";

const MarketplaceNavigation = () => {
  const navigate = useNavigate();

  const onFarmjointLogo2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButton10Click = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onGroupButton11Click = useCallback(() => {
    navigate("/farmers-deals");
  }, [navigate]);

  const onGroupButton12Click = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onGroupButton13Click = useCallback(() => {
    navigate("/storage");
  }, [navigate]);

  const onGroupButton15Click = useCallback(() => {
    navigate("/track-order");
  }, [navigate]);

  const onRectangle86Click = useCallback(() => {
    navigate("/track-order");
  }, [navigate]);

  return (
    <div className={styles.marketplaceNavigation}>
      <div className={styles.marketplaceNavigationChild} />
      <button
        className={styles.farmjointLogo2}
        onClick={onFarmjointLogo2Click}
      />
      <div className={styles.groupParent}>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton10Click}
        >
          <div className={styles.groupChild} />
          <img
            className={styles.antDesignhomeOutlinedIcon}
            alt=""
            src="/antdesignhomeoutlined3.svg"
          />
          <div className={styles.home}>Home</div>
        </button>

        <button
          className={styles.rectangleParent}
          onClick={onGroupButton11Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.bulkOrders}>Farmers Deals</div>
          <img
            className={styles.healthiconsfruitsOutline}
            alt=""
            src="/healthiconsfruitsoutline5.svg"
          />
        </button>

        <button className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.marketplace}>Marketplace</div>
          <img
            className={styles.claritystoreLineIcon}
            alt=""
            src="/claritystoreline5.svg"
          />
        </button>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton12Click}
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
          onClick={onGroupButton13Click}
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
          onClick={onGroupButton15Click}
        >
          <div className={styles.groupChild2} onClick={onRectangle86Click} />
          <div className={styles.bulkOrders}>Track Order</div>
          <img className={styles.carbonmapIcon} alt="" src="/carbonmap3.svg" />
        </button>
      </div>
    </div>
  );
};

export default MarketplaceNavigation;
