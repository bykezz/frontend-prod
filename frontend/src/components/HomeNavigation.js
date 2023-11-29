import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeNavigation.module.css";
const HomeNavigation = () => {
  const navigate = useNavigate();

  const onGroupButton21Click = useCallback(() => {
    navigate("/farmers-deals");
  }, [navigate]);

  const onGroupButton22Click = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onGroupButton23Click = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onGroupButton24Click = useCallback(() => {
    navigate("/storage");
  }, [navigate]);

  const onGroupButton26Click = useCallback(() => {
    navigate("/track-order");
  }, [navigate]);

  const onRectangle34Click = useCallback(() => {
    navigate("/track-order");
  }, [navigate]);

  const onFarmjointLogo2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <nav className={styles.homeNavigation} id="nav-bar" height="true">
      <div className={styles.homeNavigationChild} />
      <div className={styles.groupParent}>
        <button className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img
            className={styles.antDesignhomeOutlinedIcon}
            alt=""
            src="/antdesignhomeoutlined1.svg"
          />
          <div className={styles.home}>Home</div>
        </button>

        <button
          className={styles.rectangleParent}
          onClick={onGroupButton21Click}
        >
          <div className={styles.groupItem} />
          <div className={styles.bulkOrders}>Farmers'</div>
          <div className={styles.bulk}>Deals</div>
          <img
            className={styles.healthiconsfruitsOutline}
            alt=""
            src="/healthiconsfruitsoutline1.svg"
          />
        </button>

        <button
          className={styles.rectangleParent}
          onClick={onGroupButton22Click}
        >
          <div className={styles.groupItem} />
          <div className={styles.marketplace}>Marketplace</div>
          <img
            className={styles.claritystoreLineIcon}
            alt=""
            src="/claritystoreline1.svg"
          />
        </button>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton23Click}
        >
          <div className={styles.groupItem} />
          <div className={styles.logistics}>Logistics</div>
          <img
            className={styles.fa6SolidtruckFastIcon}
            alt=""
            src="/fa6solidtruckfast1.svg"
          />
        </button>
        <button
          className={styles.rectangleParent}
          onClick={onGroupButton24Click}
        >
          <div className={styles.groupItem} />
          <div className={styles.storage}>Storage</div>
          <img
            className={styles.claritystoreLineIcon}
            alt=""
            src="/mdisilooutline1.svg"
          />
        </button>

        <button
          className={styles.rectangleParent}
          onClick={onGroupButton26Click}
        >
          <div className={styles.groupChild2} onClick={onRectangle34Click} />
          <div className={styles.bulkOrders}>Track Order</div>
          <img className={styles.carbonmapIcon} alt="" src="/carbonmap1.svg" />
        </button>
      </div>
      <button
        className={styles.farmjointLogo2}
        onClick={onFarmjointLogo2Click}
      />
    </nav>
  );
};

export default HomeNavigation;
