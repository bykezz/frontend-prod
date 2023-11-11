import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DashboardNavigation from "../components/DashboardNavigation";
import styles from "./FarmersDashboardOrders.module.css";

const FarmersDashboardOrders = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/farmers-dashboard-messages");
  }, [navigate]);

  const onProductsClick = useCallback(() => {
    navigate("/farmers-dashboard-product");
  }, [navigate]);

  const onGeolocationClick = useCallback(() => {
    navigate("/farmers-dashboard-geolocation");
  }, [navigate]);

  const onWeatherForecastClick = useCallback(() => {
    navigate("/farmers-dashboard-weather");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/farmers-dashboard-profile");
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
    <div className={styles.farmersDashboardOrders}>
      <SearchBar
        dimensionText="/phuserlight3.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.4%"
      />

      <div className={styles.farmersOrders}>
        <div className={styles.farmersOrdersChild} />
        <div className={styles.farmersOrdersItem} />
        <div className={styles.customer}>Customer</div>
        <div className={styles.location}>Location</div>
        <div className={styles.customerDetails}>
          <div className={styles.customerDetailsChild} />
          <b className={styles.sarahDanjuma}>Sarah Danjuma</b>
          <div className={styles.abuja}>Abuja</div>
          <div className={styles.pending}>Pending</div>
          <div className={styles.at725Am}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <b className={styles.jamesKanu}>James Kanu</b>
          <div className={styles.adoEkiti}>Abuja</div>
          <div className={styles.cancelled}>Cancelled</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild1} />
          <b className={styles.jamesKanu}>Bola Oladeji</b>
          <div className={styles.adoEkiti}>Ado-Ekiti</div>
          <div className={styles.delivered}>Delivered</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <b className={styles.jamesKanu}>Esther Gowon</b>
          <div className={styles.adoEkiti}>Kaduna</div>
          <div className={styles.delivered}>Delivered</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild1} />
          <b className={styles.jamesKanu}>Nafisat Ahmed</b>
          <div className={styles.adoEkiti}>Abuja</div>
          <div className={styles.delivered}>Delivered</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.rectangleDiv} />
          <b className={styles.jamesKanu}>Etuk Akpan</b>
          <div className={styles.adoEkiti}>Uyo</div>
          <div className={styles.pending1}>Pending</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild1} />
          <b className={styles.jamesKanu}>Geofrey George</b>
          <div className={styles.adoEkiti}>Boro</div>
          <div className={styles.delivered}>Delivered</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.rectangleDiv} />
          <b className={styles.jamesKanu}>Temitope Adeyemi</b>
          <div className={styles.adoEkiti}>Ibadan</div>
          <div className={styles.delivered}>Delivered</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.rectangleDiv} />
          <b className={styles.jamesKanu}>Anita Ehime</b>
          <div className={styles.adoEkiti}>Benin</div>
          <div className={styles.delivered}>Delivered</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupChild1} />
          <b className={styles.jamesKanu}>Toyosi Omotosho</b>
          <div className={styles.adoEkiti}>Lagos</div>
          <div className={styles.cancelled}>Cancelled</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupChild9} />
          <b className={styles.peterAnyawu}>Peter Anyawu</b>
          <div className={styles.akure}>Akure</div>
          <div className={styles.delivered6}>Delivered</div>
          <div className={styles.at725Am10}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupChild1} />
          <b className={styles.jamesKanu}>Olabisi Olufemi</b>
          <div className={styles.adoEkiti}>Abeokuta</div>
          <div className={styles.delivered}>Delivered</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.rectangleParent10}>
          <div className={styles.groupChild11} />
          <b className={styles.blessingNnamdi}>Blessing Nnamdi</b>
          <div className={styles.portHarcourt}>Port Harcourt</div>
          <div className={styles.delivered8}>Delivered</div>
          <div className={styles.at725Am12}>2023/06/20 at 7:25 am</div>
        </div>
        <div className={styles.deliveryStatus}>Delivery Status</div>
        <div className={styles.rectangleParent11}>
          <button className={styles.rectangleButton} />
          <div className={styles.filterByLocation}>Filter by location</div>
          <button className={styles.groupChild12} />
          <div className={styles.filterByDate}>Filter by date</div>
          <button className={styles.groupChild13} />
          <div className={styles.filterByDelivery}>
            Filter by delivery status
          </div>
          <button className={styles.groupButton}>
            <div className={styles.groupChild14} />
            <div className={styles.filter}>Filter</div>
          </button>
        </div>
        <div className={styles.date}>Date</div>
        <img
          className={styles.farmersOrdersInner}
          alt=""
          src="/polygon-7.svg"
        />
        <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
        <img
          className={styles.farmersOrdersChild1}
          alt=""
          src="/polygon-7.svg"
        />
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild1} />
          <b className={styles.jamesKanu}>Nkem Okafor</b>
          <div className={styles.delivered}>Delivered</div>
          <div className={styles.at725Am1}>2023/06/20 at 7:25 am</div>
          <div className={styles.adoEkiti}>Enugu</div>
        </div>
        <div className={styles.farmersOrdersChild2} />
        <button
          className={styles.ellipseContainer}
          onClick={onFrameButton1Click}
        >
          <div className={styles.frameItem} />
          <img className={styles.vectorIcon1} alt="" src="/vector27.svg" />
        </button>
        <button className={styles.products} onClick={onProductsClick}>
          Products
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
        <button className={styles.rectangleParent13}>
          <div className={styles.groupChild16} />
          <div className={styles.orders}>Orders</div>
        </button>
        <button className={styles.profile} onClick={onProfileClick}>
          Profile
        </button>
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

export default FarmersDashboardOrders;
