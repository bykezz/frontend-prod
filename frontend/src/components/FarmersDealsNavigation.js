import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FarmersDealsNavigation.module.css";

const FarmersDealsNavigation = () => {
  const navigate = useNavigate();

  const onFarmjointLogo2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButton24Click = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onGroupButton26Click = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onGroupButton27Click = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onGroupButton28Click = useCallback(() => {
    navigate("/storage");
  }, [navigate]);

  const onGroupButton29Click = useCallback(() => {
    navigate("/track-order");
  }, [navigate]);

  return (
    <div className={styles.farmersdealsNavigation}>
      <div className={styles.farmersdealsNavigationChild} />
      <button
        className={styles.farmjointLogo2}
        onClick={onFarmjointLogo2Click}
      />
      <div className={styles.groupParent}>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton24Click}
        >
          <div className={styles.groupChild} />
          <img
            className={styles.antDesignhomeOutlinedIcon}
            alt=""
            src="/antdesignhomeoutlined2.svg"
          />
          <div className={styles.home}>Home</div>
        </button>
        <button className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.farmersDeals}>Farmers' </div>
          <div className={styles.farmers}>Deals</div>
          <img
            className={styles.healthiconsfruitsOutline}
            alt=""
            src="/healthiconsfruitsoutline.svg"
          />
        </button>
        <button
          className={styles.rectangleContainer}
          onClick={onGroupButton26Click}
        >
          <div className={styles.groupChild} />

          <div className={styles.marketplace1}>Marketplace</div>
          <img
            className={styles.claritystoreLineIcon}
            alt=""
            src="/claritystoreline1.svg"
          />
        </button>
        <button className={styles.groupButton} onClick={onGroupButton27Click}>
          <div className={styles.groupChild} />
          <div className={styles.logistics}>Logistics</div>
          <img
            className={styles.fa6SolidtruckFastIcon}
            alt=""
            src="/fa6solidtruckfast1.svg"
          />
        </button>
        <button
          className={styles.rectangleParent1}
          onClick={onGroupButton28Click}
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
          className={styles.rectangleParent2}
          onClick={onGroupButton29Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.trackOrder}>Track Order</div>
          <img className={styles.carbonmapIcon} alt="" src="/carbonmap1.svg" />
        </button>
      </div>
    </div>
  );
};

export default FarmersDealsNavigation;
