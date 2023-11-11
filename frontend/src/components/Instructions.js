import { useState, useCallback } from "react";
import styles from "./Instructions.module.css";
import SetGeolocation from "./SetGeolocation";

const Instructions = () => {
  const [isSetGeoLocationOpen, setSetGeoLocation] = useState(false);
  const [ispopupOpen, setPopUp] = useState(true);
  const openSetGeoLocation = useCallback(() => {
    setSetGeoLocation(true);
    setPopUp(false);
  }, []);

  const closeSetGeolocation = useCallback(() => {
    setSetGeoLocation(false);
  }, []);
  return (
    <>
      {ispopupOpen && (
        <div className={styles.instructions}>
          <div className={styles.instructionsChild} />
          <div className={styles.instructions1}>Instructions</div>
          <div className={styles.step1EnsureContainer}>
            <p className={styles.step1EnsureThatYouHaveS}>
              <span className={styles.step1}>Step 1:</span>
              <span> Ensure that you have stable internet connection.</span>
            </p>
            <p className={styles.step1EnsureThatYouHaveS}>
              <span className={styles.step1}>Step 2:</span>
              <span> Make sure your phone’s location is switched on.</span>
            </p>
            <p className={styles.step1EnsureThatYouHaveS}>
              <span className={styles.step1}>Step 3:</span>
              <span> Stand at the centre of your farm.</span>
            </p>
            <p className={styles.step1EnsureThatYouHaveS}>
              <span className={styles.step1}>Step 4:</span>
              <span> Click “Next” to proceed.</span>
            </p>
          </div>
          <button
            className={styles.rectangleParent}
            onClick={openSetGeoLocation}
          >
            <div className={styles.groupChild} />
            <div className={styles.next}>Next</div>
          </button>
        </div>
      )}
      {isSetGeoLocationOpen && <SetGeolocation onClose={closeSetGeolocation} />}
    </>
  );
};

export default Instructions;
