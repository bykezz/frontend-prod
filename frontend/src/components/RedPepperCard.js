import { useState, useMemo, useCallback } from "react";
import ProductPopup from "./ProductPopup";
import PortalPopup from "./PortalPopup";
import styles from "./RedPepperCard.module.css";
import { usePopupContext } from "../context/PopupContext";
const RedPepperCard = ({
  redPepperCardPosition,
  redPepperCardWidth,
  redPepperCardHeight,
  redPepperCardTop,
  redPepperCardRight,
  redPepperCardBottom,
  redPepperCardLeft,
}) => {
  const { setSelectedProduct } = usePopupContext();
  const openPopup = () => {
    setSelectedProduct({
      name: "Red Pepper",
      price: "2000",
      weight: "2",
      imageSrc: "/sweetredpeppers--copy600x600removebgpreview-2@2x.png",
    });
    openRedPepperPopUp();
  };
  const [isRedPepperPopUpOpen, setRedPepperPopUpOpen] = useState(false);
  const redPepperCardStyle = useMemo(() => {
    return {
      position: redPepperCardPosition,
      width: redPepperCardWidth,
      height: redPepperCardHeight,
      top: redPepperCardTop,
      right: redPepperCardRight,
      bottom: redPepperCardBottom,
      left: redPepperCardLeft,
    };
  }, [
    redPepperCardPosition,
    redPepperCardWidth,
    redPepperCardHeight,
    redPepperCardTop,
    redPepperCardRight,
    redPepperCardBottom,
    redPepperCardLeft,
  ]);

  const openRedPepperPopUp = useCallback(() => {
    setRedPepperPopUpOpen(true);
  }, []);

  const closeRedPepperPopUp = useCallback(() => {
    setRedPepperPopUpOpen(false);
  }, []);

  return (
    <>
      <button className={styles.redPepperCard} style={redPepperCardStyle}>
        <div className={styles.redPepperCardChild} />
        <div className={styles.redPepper}>Red Pepper</div>
        <div className={styles.n2000}>N2,000</div>
        <div className={styles.redPepperCardItem} />
        <img
          className={styles.sweetRedPeppersCopy600x6Icon}
          alt=""
          src="/sweetredpeppers--copy600x600removebgpreview-2@2x.png"
        />
      </button>
      {isRedPepperPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRedPepperPopUp}
        >
          <ProductPopup onClose={closeRedPepperPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default RedPepperCard;
