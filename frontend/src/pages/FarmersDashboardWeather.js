import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import DashboardNavigation from "../components/DashboardNavigation";
import styles from "./FarmersDashboardWeather.module.css";

const FarmersDashboardWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const navigate = useNavigate();

  const onGeolocationClick = useCallback(() => {
    navigate("/farmers-dashboard-geolocation");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/farmers-dashboard-messages");
  }, [navigate]);

  const onProductsClick = useCallback(() => {
    navigate("/farmers-dashboard-product");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
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

  useEffect(() => {
    const weatherKey = "d1c87d56f6ba8b5a20a8a2655dd79b93";

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLatitude(latitude);
          setLongitude(longitude);
          const proxyUrl = "https://cors-anywhere.herokuapp.com/";
          const apiUrl = `https://api.openweathermap.org/data/3.0/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`;

          const url = `${proxyUrl}${apiUrl}`;
          axios
            .get(url)
            .then((response) => {
              console.log(response.data);
              setWeatherData(response.data);
            })
            .catch((error) => {
              console.error("Error fetching weather data:", error);
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <div className={styles.farmersDashboardWeather}>
      <SearchBar
        dimensionText="/phuserlight3.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.4%"
      />
      <div className={styles.farmerWeatherForecast}>
        <div className={styles.farmerWeatherForecastChild} />
        {weatherData.main && (
          <div className={styles.noteThisWeather}>
            Note: This weather forecast is based on your present geolocation.
            <div className={styles.weatherForecastItem1}>
              Date: {new Date(weatherData.dt * 1000).toLocaleString()},
              Temperature: {weatherData.main.temp}°C, Wind Speed:{" "}
              {weatherData.wind.speed} m/s, Precipitation:{" "}
              {weatherData.rain ? weatherData.rain["3h"] || 0 : 0} mm
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            </div>
          </div>
        )}
        <div className={styles.farmerWeatherForecastItem} />

        <button className={styles.geolocation} onClick={onGeolocationClick}>
          Geolocation
        </button>
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
        <button className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.weatherForecast}>Weather Forecast</div>
        </button>
        <button className={styles.ordersWrapper} onClick={onGroupButton1Click}>
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

export default FarmersDashboardWeather;
