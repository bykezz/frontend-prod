import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FarmersDashboardProfile.module.css";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import DashboardNavigation from "../components/DashboardNavigation";
import { useFarmerProfile } from "../context/FarmerProfileContext";
import { useAuth } from "../context/AuthContext";

const FarmersDashboardProfile = () => {
  const navigate = useNavigate();
  const {
    first_name,
    last_name,
    email,
    farmName,
    street,
    city,
    farmState,
    profilePicture,
    setFarmName,
  } = useFarmerProfile();
  const { token } = useAuth();

  const onVerifyMyFarmClick = useCallback(() => {
    navigate("/farmers-dashboard-farm-verification");
  }, [navigate]);

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

  const onGroupIconClick = useCallback(() => {
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
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    const api = "http://13.53.125.166/farmers/my_profile/";

    axios
      .get(api)
      .then((response) => {
        const Data2 = response.data;
        setFarmName(Data2.farm_name);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className={styles.farmersDashboardProfile}>
      <SearchBar
        dimensionText="/phuserlight3.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.4%"
      />

      <div className={styles.farmerProfile}>
        <div className={styles.farmerProfileChild} />
        <button className={styles.verifyMyFarm} onClick={onVerifyMyFarmClick}>
          Verify my farm
        </button>
        <button
          className={styles.rectangleContainer}
          onClick={onGroupButtonClick}
        >
          <div className={styles.rectangleDiv} />
          <div className={styles.editProfile}>Edit Profile</div>
        </button>
        <div className={styles.farmNameHabContainer}>
          <p className={styles.farmNameHab}>Farm name: {farmName} </p>
          <p className={styles.farmNameHab}>&nbsp;</p>
          <p className={styles.farmNameHab}>
            Name: {first_name} {last_name}
          </p>
          <p className={styles.farmNameHab}>&nbsp;</p>
          <p className={styles.farmNameHab}>Email: {email} </p>
          <p className={styles.farmNameHab}>&nbsp;</p>
          <p className={styles.farmNameHab}>
            Farm address: {street}, {city}, {farmState}.
          </p>
        </div>
        <div className={styles.farmerProfileItem} />
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
          className={styles.farmerProfileInner}
          onClick={onFrameButton1Click}
        >
          <img
            className={styles.frameItem}
            alt=""
            src="/group-490.svg"
            onClick={onGroupIconClick}
          />
        </button>
        <img
          className={styles.groupIcon}
          alt="Profile image"
          src={profilePicture ? profilePicture : "/group-491.svg"}
        />
      </div>
      <button className={styles.groupButton}>
        <div className={styles.groupChild1} />
        <div className={styles.profile}>Profile</div>
      </button>
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
  );
};

export default FarmersDashboardProfile;
