import styles from "./SetGeolocation.module.css";
import ThanksSaved from "./ThanksSaved";
import { useState, useEffect } from "react";
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
const SetGeolocation = ({ onClose }) => {
  const [isThanksSavedOpen, setThanksSaved] = useState(false);
  const { setLocationChanged } = useGeolocation();
  const [isSetGeoLocationOpen, setSetGeoLocation] = useState(true);
  const [initialPosition, setInitialPosition] = useState(null);
  const openThanksSaved = () => {
    setThanksSaved(true);

    setSetGeoLocation(false);
  };
  const closeThanksSaved = () => {
    setThanksSaved(false);
  };

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setInitialPosition({ lat: latitude, lng: longitude });
      });
    } else {
      alert("Geolocation is not available in your browser");
    }
  };

  useEffect(() => {
    getUserLocation(); // Fetch the user's location when the component mounts
  }, []);

  return (
    <>
      {isSetGeoLocationOpen && (
        <div className={styles.setgeolocation}>
          <div className={styles.groupParent}>
            <div className={styles.groupParent}>
              <div className={styles.groupChild} />
              {initialPosition && (
                <MapContainer
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCxKIzKQWdoyzp9ra1G5BhfzVA394ffQN0&v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div
                      style={{
                        margin: `25px`,
                        marginTop: `65px`,
                        height: `350px`,
                      }}
                    />
                  }
                  mapElement={<div style={{ height: `100%` }} />}
                  initialPosition={initialPosition}
                />
              )}
            </div>
            <div className={styles.currentGeolocationLatitudeContainer}>
              <p className={styles.currentGeolocation}>Current Geolocation:</p>
              {initialPosition && (
                <p className={styles.latitude721}>
                  Latitude: {initialPosition.lat} N; Longitude:{" "}
                  {initialPosition.lng} E
                </p>
              )}
            </div>
          </div>
          <button
            className={styles.rectangleGroup}
            onClick={() => {
              openThanksSaved();
              setLocationChanged(true);
            }}
          >
            <div className={styles.groupItem} />
            <div className={styles.set}>Set</div>
          </button>
        </div>
      )}
      {isThanksSavedOpen && <ThanksSaved onClose={closeThanksSaved} />}
    </>
  );
};

export default SetGeolocation;
