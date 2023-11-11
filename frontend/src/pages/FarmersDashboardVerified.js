import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FarmersDashboardVerified.module.css";

const FarmersDashboardVerified = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/farmers-dashboard-edit-profile");
  }, [navigate]);

  const onOrdersClick = useCallback(() => {
    navigate("/farmers-dashboard-orders");
  }, [navigate]);

  const onGeolocationClick = useCallback(() => {
    navigate("/farmers-dashboard-geolocation");
  }, [navigate]);

  const onWeatherForecastClick = useCallback(() => {
    navigate("/farmers-dashboard-weather");
  }, [navigate]);

  const onProductsClick = useCallback(() => {
    navigate("/farmers-dashboard-product");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/farmers-dashboard-messages");
  }, [navigate]);

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
    <div className={styles.farmersDashboardVerified}>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.searchAnyCategory}>
            Search any category or product
          </div>
          <img
            className={styles.octiconsearch24}
            alt=""
            src="/octiconsearch241.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.register}>Register</div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.cartParent}>
            <div className={styles.cart}>Cart</div>
            <img
              className={styles.bibasketFillIcon}
              alt=""
              src="/bibasketfill2.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.groupInner} />
            <div className={styles.div}>5</div>
          </div>
        </div>
        <button className={styles.ellipseGroup}>
          <div className={styles.frameChild} />
          <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
        </button>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameItem} />
        <img className={styles.ciwavyCheckIcon} alt="" src="/ciwavycheck.svg" />
        <button className={styles.groupButton} onClick={onGroupButtonClick}>
          <div className={styles.rectangleDiv} />
          <div className={styles.editProfile}>Edit Profile</div>
        </button>
        <div className={styles.farmNameHabContainer}>
          <p className={styles.farmNameHab}>Farm name: Hab Farms</p>
          <p className={styles.farmNameHab}>&nbsp;</p>
          <p className={styles.farmNameHab}>Username: habfarms</p>
          <p className={styles.farmNameHab}>&nbsp;</p>
          <p className={styles.farmNameHab}>Email: habfarms@gmail.com</p>
          <p className={styles.farmNameHab}>&nbsp;</p>
          <p className={styles.farmNameHab}>Farm address: Ado-Ekiti</p>
        </div>
        <div className={styles.verified}>VERIFIED</div>
        <div className={styles.frameInner} />
        <button className={styles.orders} onClick={onOrdersClick}>
          Orders
        </button>
        <button className={styles.geolocation} onClick={onGeolocationClick}>
          Geolocation
        </button>
        <button
          className={styles.weatherForecast}
          onClick={onWeatherForecastClick}
        >
          Weather Forecast
        </button>
        <button className={styles.products} onClick={onProductsClick}>
          Products
        </button>
        <div className={styles.dashiconsemailAlt} />
        <button
          className={styles.ellipseContainer}
          onClick={onFrameButton1Click}
        >
          <div className={styles.ellipseDiv} />
          <img className={styles.vectorIcon1} alt="" src="/vector7.svg" />
        </button>
        <img className={styles.groupIcon} alt="" src="/group-491.svg" />
      </div>
      <button className={styles.rectangleParent1}>
        <div className={styles.groupChild1} />
        <div className={styles.profile}>Profile</div>
      </button>
      <div className={styles.dashboardNavigation}>
        <div className={styles.dashboardNavigationChild} />
        <div className={styles.frameDiv}>
          <button
            className={styles.rectangleParent2}
            onClick={onGroupButton2Click}
          >
            <div className={styles.groupChild2} />
            <img
              className={styles.antDesignhomeOutlinedIcon}
              alt=""
              src="/antdesignhomeoutlined.svg"
            />
            <div className={styles.home}>Home</div>
          </button>
          <button
            className={styles.rectangleParent2}
            onClick={onGroupButton3Click}
          >
            <div className={styles.groupChild2} />
            <div className={styles.marketplace}>Marketplace</div>
            <img
              className={styles.claritystoreLineIcon}
              alt=""
              src="/claritystoreline3.svg"
            />
          </button>
          <button
            className={styles.rectangleParent2}
            onClick={onGroupButton4Click}
          >
            <div className={styles.groupChild2} />
            <div className={styles.logistics}>Logistics</div>
            <img
              className={styles.fa6SolidtruckFastIcon}
              alt=""
              src="/fa6solidtruckfast2.svg"
            />
          </button>
          <button
            className={styles.rectangleParent2}
            onClick={onGroupButton5Click}
          >
            <div className={styles.groupChild2} />
            <div className={styles.storage}>Storage</div>
            <img
              className={styles.claritystoreLineIcon}
              alt=""
              src="/mdisilooutline.svg"
            />
          </button>
          <button className={styles.rectangleParent2}>
            <div className={styles.groupChild2} />
            <div className={styles.bulkOrders}>Bulk Orders</div>
            <img
              className={styles.healthiconsfruitsOutline}
              alt=""
              src="/healthiconsfruitsoutline2.svg"
            />
          </button>
          <button
            className={styles.rectangleParent2}
            onClick={onGroupButton7Click}
          >
            <div className={styles.groupChild2} />
            <div className={styles.bulkOrders}>Track Order</div>
            <img
              className={styles.carbonmapIcon}
              alt=""
              src="/carbonmap2.svg"
            />
          </button>
        </div>
        <button className={styles.farmjointLogo2} />
      </div>
    </div>
  );
};

export default FarmersDashboardVerified;
