import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import DashboardNavigation from "../components/DashboardNavigation";
import styles from "./FarmersDashboardWeather.module.css";

const FarmersDashboardWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
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
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`;
          const apiUrl1 = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`;

          Promise.all([
            fetch(apiUrl).then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            }),
            fetch(apiUrl1).then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok for forecast");
              }
              return response.json();
            }),
          ])
            .then(([data, data1]) => {
              console.log("Weather Data", data);
              console.log("Forecast Data", data1);
              setWeatherData(data);
              setForecastData(data1);
            })
            .catch((error) => {
              console.error("Error fetching weather data:", error);
            });
        },
        (error) => {
          console.error("Error getting weather:", error);
        }
      );
    } else {
      console.error("Weather is not available in this browser.");
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
            <div className={styles.weatherCard}>
              <h1>{weatherData.name}</h1>

              <p className={styles.datetime}>
                Date and Time:{" "}
                <span>{new Date(weatherData.dt * 1000).toLocaleString()}</span>
              </p>
              <p>{weatherData.weather[0].description}</p>
              <img
                className={styles.weathericon}
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="Weather Icon"
              />

              <p className={styles.temperature}>
                <span>{Math.round(weatherData.main.temp - 273.15)}</span>
                °C
              </p>
              <p>
                Feels Like:{" "}
                <span className={styles.feelsLike}>
                  {Math.round(weatherData.main.feels_like - 273.15)}
                </span>
                °C
              </p>
              <p>
                Humidity:{" "}
                <span className={styles.humidity}>
                  {weatherData.main.humidity}
                </span>
                %
              </p>
              <p className={styles.windSpeed}>
                Wind Speed: <span>{weatherData.wind.speed}</span> m/s
              </p>
              <p className={styles.precipitation}>
                Rain:{" "}
                <span>{weatherData.rain ? weatherData.rain["3h"] : 0}</span> %
              </p>
            </div>
            <div className={styles.forecastCard}>
              {forecastData.list.slice(0, 10).map((forecast, index) => {
                const forecastDate = new Date(forecast.dt * 1000);
                const currentDate = new Date();
                const isToday =
                  forecastDate.getDate() === currentDate.getDate() &&
                  forecastDate.getMonth() === currentDate.getMonth() &&
                  forecastDate.getFullYear() === currentDate.getFullYear();
                return (
                  <div key={index} className={styles.forecastItem}>
                    <img
                      className={styles.forecasticon}
                      src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                      alt="Weather Icon"
                    />
                    <p className={styles.datetime}>
                      {isToday
                        ? "Today"
                        : forecastDate.toLocaleDateString("en-US", {
                            weekday: "long",
                          })}
                    </p>
                    <p className={styles.temperature}>
                      {Math.round(forecast.main.temp - 273.15)}°C
                    </p>
                    <p className={styles.description}>
                      {weatherData.weather[0].description}
                    </p>
                    <p className={styles.feelLike}>
                      Feels Like:{" "}
                      <span>
                        {Math.round(weatherData.main.feels_like - 273.15)}
                      </span>
                      °C
                    </p>
                    <p className={styles.precipitation1}>
                      Rain:{" "}
                      <span>
                        {weatherData.rain ? weatherData.rain["3h"] : 0}
                      </span>{" "}
                      %
                    </p>
                  </div>
                );
              })}
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
