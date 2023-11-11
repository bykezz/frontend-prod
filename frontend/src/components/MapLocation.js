import React, { useState } from "react";
import GoogleMapReact from "google-map-react"; // Remove the "/dist/index.umd" part
import styles from "./MapLocation.module.css";
import CustomMarker from "./CustomMarker";

const MapLocation = () => {
  const [latitude, setLatitude] = useState(0); // Correct usage of useState
  const [longitude, setLongitude] = useState(0); // Correct usage of useState

  return (
    <div className={styles.mapLocation}>
      <div className={styles.liveLocationAkureContainer}>
        <span>{`Live Location: `}</span>
        <span className={styles.akure}>Akure</span>
      </div>
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCxKIzKQWdoyzp9ra1G5BhfzVA394ffQN0" }}
          defaultCenter={{ lat: latitude, lng: longitude }}
          defaultZoom={12}
          onClick={({ lat, lng }) => {
            setLatitude(lat);
            setLongitude(lng);
          }}
        >
          <CustomMarker lat={latitude} lng={longitude} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MapLocation;
