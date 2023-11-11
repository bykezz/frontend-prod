import { useState, useCallback, useEffect } from "react";
import AreYouSure1 from "../components/AreYouSure1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import DashboardNavigation from "../components/DashboardNavigation";
import SearchBar from "../components/SearchBar";
import styles from "./FarmersDashboardGeolocation.module.css";
import { useGeolocation } from "../context/Geolocation";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapContainer = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={props.initialPosition}
      center={props.initialPosition}
    >
      <Marker position={props.initialPosition} />
    </GoogleMap>
  ))
);
const storeUserLocation = (location) => {
  localStorage.setItem("userLocation", JSON.stringify(location));
};
const getUserLocation = () => {
  const storedLocation = localStorage.getItem("userLocation");
  return storedLocation ? JSON.parse(storedLocation) : null;
};

const FarmersDashboardGeolocation = () => {
  const [isAreYouSureOpen, setAreYouSureOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const { locationChanged } = useGeolocation();

  const navigate = useNavigate();

  useEffect(() => {
    const storedLocation = getUserLocation();
    if (storedLocation) {
      setUserLocation(storedLocation);
    } else if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = { latitude, longitude };
          setUserLocation(location);
          storeUserLocation(location);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  const openAreYouSure = useCallback(() => {
    setAreYouSureOpen(true);
  }, []);

  const closeAreYouSure = useCallback(() => {
    setAreYouSureOpen(false);
  }, [userLocation]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/farmers-dashboard-messages");
  }, [navigate]);

  const onProductsClick = useCallback(() => {
    navigate("/farmers-dashboard-product");
  }, [navigate]);

  const onWeatherForecastClick = useCallback(() => {
    navigate("/farmers-dashboard-weather");
  }, [navigate]);

  const onGroupButton8Click = useCallback(() => {
    navigate("/farmers-dashboard-orders");
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
    <>
      <div className={styles.farmersDashboardGeolocation}>
        <SearchBar
          dimensionText="/phuserlight3.svg"
          dimensionText2="/bibasketfill2.svg"
          propRight="5.4%"
        />
        <div className={styles.rectangleContainer}>
          <div className={styles.frameItem} />
          <button className={styles.groupButton} onClick={openAreYouSure}>
            <div className={styles.rectangleDiv} />
            <div className={styles.requestChange}>Change Location</div>
          </button>
          {userLocation && (
            <div className={styles.coordinatesLatitude7}>
              Coordinates: Latitude:{" "}
              <span className={styles.lat}>{userLocation.latitude} </span>{" "}
              <span className={styles.lon}>
                {" "}
                Longitude:
                <span className={styles.lat}> {userLocation.longitude}</span>
              </span>
            </div>
          )}
          {locationChanged && (
            <div className={styles.review}>
              Your location change request is currently under review.
            </div>
          )}
          <div className={styles.screenshot202308020921381Parent}>
            {userLocation && (
              <MapContainer
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCxKIzKQWdoyzp9ra1G5BhfzVA394ffQN0&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "500px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                initialPosition={{
                  lat: userLocation.latitude,
                  lng: userLocation.longitude,
                }}
              />
            )}
          </div>
          <div className={styles.frameInner} />
          <button className={styles.rectangleParent1}>
            <div className={styles.groupChild1} />
            <div className={styles.geolocation}>Geolocation</div>
          </button>
          <button
            className={styles.ellipseContainer}
            onClick={onFrameButton1Click}
          >
            <div className={styles.ellipseDiv} />
            <img className={styles.vectorIcon2} alt="" src="/vector27.svg" />
          </button>
          <button className={styles.products} onClick={onProductsClick}>
            Products
          </button>
          <button
            className={styles.weatherForecast}
            onClick={onWeatherForecastClick}
          >
            Weather Forecast
          </button>
          <button
            className={styles.ordersWrapper}
            onClick={onGroupButton8Click}
          >
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
      {isAreYouSureOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAreYouSure}
        >
          <AreYouSure1 onClose={closeAreYouSure} />
        </PortalPopup>
      )}
    </>
  );
};

export default FarmersDashboardGeolocation;
