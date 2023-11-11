import { useState, useCallback } from "react";
import ThankYouMessage1 from "./ThankYouMessage1";
import PortalPopup from "./PortalPopup";
import styles from "./AreYouSure1.module.css";
import Instructions from "./Instructions";

const AreYouSure1 = ({ onClose }) => {
  const [isThankYouMessage1Open, setThankYouMessage1Open] = useState(false);
  const [isInstructionsOpen, setInstructions] = useState(false);
  const [ispopupOpen, setPopUp] = useState(true);

  const openThankYouMessage1 = useCallback(() => {
    setThankYouMessage1Open(true);
  }, []);

  const closeThankYouMessage1 = useCallback(() => {
    setThankYouMessage1Open(false);
  }, []);
  const openInstructions = useCallback(() => {
    setInstructions(true);
    setPopUp(false);
  }, []);

  const closeInstructions = useCallback(() => {
    setInstructions(false);
  }, []);

  return (
    <>
      {ispopupOpen && (
        <div className={styles.areYouSure}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.areYouSure1}>Are you sure about this?</div>
            <button
              className={styles.rectangleGroup}
              onClick={openInstructions}
            >
              <div className={styles.groupItem} />
              <div className={styles.yes}>Yes</div>
            </button>
            <button className={styles.rectangleContainer} onClick={onClose}>
              <div className={styles.groupInner} />
              <div className={styles.no}>No</div>
            </button>
          </div>
        </div>
      )}
      {isThankYouMessage1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeThankYouMessage1}
        >
          <ThankYouMessage1 onClose={closeThankYouMessage1} />
        </PortalPopup>
      )}
      {isInstructionsOpen && <Instructions onClose={closeInstructions} />}
    </>
  );
};

export default AreYouSure1;
