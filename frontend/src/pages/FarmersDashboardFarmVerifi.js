import { useState, useCallback } from "react";
import ThankYouMessage2 from "../components/ThankYouMessage2";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import DashboardNavigation from "../components/DashboardNavigation";
import SearchBar from "../components/SearchBar";
import styles from "./FarmersDashboardFarmVerifi.module.css";
import Instructions from "../components/Instructions";

const FarmersDashboardFarmVerifi = () => {
  const [isThankYouMessage2Open, setThankYouMessage2Open] = useState(false);
  const [isInstructionsOpen, setInstructions] = useState(false);
  const navigate = useNavigate();

  const openThankYouMessage2 = useCallback(() => {
    setThankYouMessage2Open(true);
  }, []);

  const closeThankYouMessage2 = useCallback(() => {
    setThankYouMessage2Open(false);
  }, []);

  const openInstructions = useCallback(() => {
    setInstructions(true);
  }, []);

  const closeInstructions = useCallback(() => {
    setInstructions(false);
  }, []);

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
      <div className={styles.farmersDashboardFarmVerifi}>
        <SearchBar
          dimensionText="/phuserlight3.svg"
          dimensionText2="/bibasketfill2.svg"
          propRight="5.4%"
        />

        <div className={styles.farmVerificationParent}>
          <div className={styles.farmVerification}>
            <div className={styles.farmVerificationChild} />
          </div>
          <div className={styles.rectangleParent}>
            <Footer />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild2} />
            <div className={styles.groupChild3} />
            <div className={styles.farmVerification1}>Farm Verification</div>
            <div className={styles.uploadAnyForm}>
              1. Upload any form of identification (NIN/Passport/Drivers
              License)
            </div>
            <div className={styles.toVerifyYour}>
              To verify your farm, kindly follow the instructions below:
            </div>
            <div className={styles.uploadPicturesOf}>
              2. Upload pictures of any three (3) different views of your farm:
            </div>
            <div className={styles.uploadPicturesOf1}>
              3. Set your geolocation
            </div>
            <div className={styles.view1}>View 1</div>
            <div className={styles.view2}>View 2</div>
            <div className={styles.view3}>View 3</div>
          </div>
          <button className={styles.rectangleContainer}>
            <div className={styles.groupChild4} />
            <div className={styles.upload}>Upload</div>
          </button>
          <button className={styles.groupButton}>
            <div className={styles.groupChild4} />
            <div className={styles.upload}>Upload</div>
          </button>
          <button className={styles.rectangleParent1}>
            <div className={styles.groupChild4} />
            <div className={styles.upload}>Upload</div>
          </button>
          <button className={styles.rectangleParent2}>
            <div className={styles.groupChild4} />
            <div className={styles.upload}>Upload</div>
          </button>
          <button
            className={styles.rectangleParent6}
            onClick={openInstructions}
          >
            <div className={styles.groupChild6} />
            <div className={styles.upload}>Set location</div>
          </button>
          <button className={styles.groupParent} onClick={openThankYouMessage2}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.groupChild8} />
            </div>
            <div className={styles.verifyFarm}>Verify Farm</div>
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
      {isThankYouMessage2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeThankYouMessage2}
        >
          <ThankYouMessage2 onClose={closeThankYouMessage2} />
        </PortalPopup>
      )}
      {isInstructionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInstructions}
        >
          <Instructions onClose={closeInstructions} />
        </PortalPopup>
      )}
    </>
  );
};

export default FarmersDashboardFarmVerifi;
