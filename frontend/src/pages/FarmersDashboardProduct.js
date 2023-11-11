import { useState, useCallback, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AreYouSure from "../components/AreYouSure";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DashboardNavigation from "../components/DashboardNavigation";
import styles from "./FarmersDashboardProduct.module.css";
import FarmersProducts from "../components/FarmersProducts";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useFarmerProfile } from "../context/FarmerProfileContext";

const FarmersDashboardProduct = () => {
  const [isAreYouSureOpen, setAreYouSureOpen] = useState(false);
  const navigate = useNavigate();
  const { farmersProducts, setFarmersProducts } = useFarmerProfile();
  const { token } = useAuth();

  const onGroupButtonClick = useCallback(() => {
    navigate("/farmers-dashboard-add-new-product");
  }, [navigate]);

  const closeAreYouSure = useCallback(() => {
    setAreYouSureOpen(false);
  }, []);

  const onOrdersClick = useCallback(() => {
    navigate("/farmers-dashboard-orders");
  }, [navigate]);

  const onGeolocationClick = useCallback(() => {
    navigate("/farmers-dashboard-geolocation");
  }, [navigate]);

  const onWeatherForecastClick = useCallback(() => {
    navigate("/farmers-dashboard-weather");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/farmers-dashboard-messages");
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

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .get("http://13.53.125.166/farmers/my_products/")
      .then((response) => {
        setFarmersProducts(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className={styles.farmersDashboardProduct}>
        <SearchBar
          dimensionText="/phuserlight3.svg"
          dimensionText2="/bibasketfill2.svg"
          propRight="5.4%"
        />
        <div className={styles.farmerProducts}>
          <div className={styles.farmerProductsChild} />
          <button
            className={styles.rectangleContainer}
            onClick={onGroupButtonClick}
          >
            <div className={styles.rectangleDiv} />
            <div className={styles.addNewProduct}>Add New Product</div>
          </button>
          <div className={styles.farmerProductsItem} />
          <div className={styles.name}>Name</div>
          <div className={styles.stock}>Stock</div>
          {farmersProducts.map((product) => (
            <FarmersProducts
              key={product.id}
              product={product}
              productImage={product.images[0].image}
            />
          ))}
          <div className={styles.price}>Price</div>
          <div className={styles.categories}>Categories</div>
          <div className={styles.rectangleParent12}>
            <button className={styles.rectangleButton} />
            <div className={styles.filterByCategory}>Filter by category</div>
            <button className={styles.groupChild24} />
            <Input
              className={styles.rectangleInput}
              size="middle"
              placeholder="Search Product"
              style={{ width: "184px" }}
              bordered={true}
              prefix={<SearchOutlined />}
            />
            <div className={styles.filterByDate}>Filter by date</div>

            <button className={styles.groupChild25} />
            <div className={styles.filterByStock}>Filter by stock status</div>
            <button className={styles.groupButton}>
              <div className={styles.groupChild26} />
              <div className={styles.filter}>Filter</div>
            </button>
          </div>
          <div className={styles.date}>Date</div>
          <img
            className={styles.farmerProductsInner}
            alt=""
            src="/polygon-7.svg"
          />
          <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
          <img
            className={styles.farmerProductsChild1}
            alt=""
            src="/polygon-7.svg"
          />
          <img className={styles.biimageIcon} alt="" src="/biimage.svg" />

          <div className={styles.farmerProductsChild2} />
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
          <button className={styles.rectangleParent14}>
            <div className={styles.groupChild29} />
            <div className={styles.products}>Products</div>
          </button>
          <button className={styles.ellipseGroup} onClick={onFrameButtonClick}>
            <div className={styles.frameChild} />
            <img className={styles.vectorIcon} alt="" src="/vector27.svg" />
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
      {isAreYouSureOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAreYouSure}
        >
          <AreYouSure onClose={closeAreYouSure} />
        </PortalPopup>
      )}
    </>
  );
};

export default FarmersDashboardProduct;
