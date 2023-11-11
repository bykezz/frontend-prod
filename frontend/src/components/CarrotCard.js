import { useState, useMemo, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./CarrotCard.module.css";
import ProductPopup from "./ProductPopup";
import { usePopupContext } from "../context/PopupContext";

const CarrotCard = ({
  carrotCardPosition,
  carrotCardWidth,
  carrotCardHeight,
  carrotCardTop,
  carrotCardRight,
  carrotCardBottom,
  carrotCardLeft,
}) => {
  const { setSelectedProduct } = usePopupContext();
  const openPopup = () => {
    setSelectedProduct({
      name: "Carrot",
      price: "2000",
      weight: "2",
      imageSrc:
        "/851951bba003827272830485a6b84d4d-largeremovebgpreview-3@2x.png",
    });
    openCarrotPopUp();
  };
  const [isCarrotPopUpOpen, setCarrotPopUpOpen] = useState(false);
  const carrotCardStyle = useMemo(() => {
    return {
      position: carrotCardPosition,
      width: carrotCardWidth,
      height: carrotCardHeight,
      top: carrotCardTop,
      right: carrotCardRight,
      bottom: carrotCardBottom,
      left: carrotCardLeft,
    };
  }, [
    carrotCardPosition,
    carrotCardWidth,
    carrotCardHeight,
    carrotCardTop,
    carrotCardRight,
    carrotCardBottom,
    carrotCardLeft,
  ]);

  const openCarrotPopUp = useCallback(() => {
    setCarrotPopUpOpen(true);
  }, []);

  const closeCarrotPopUp = useCallback(() => {
    setCarrotPopUpOpen(false);
  }, []);

  return (
    <>
      <div>
        <button className={styles.carrotCard} style={carrotCardStyle}>
          <div className={styles.carrotCardChild} />
          <div className={styles.carrot}>Carrot</div>
          <div className={styles.n2000}>N2,000</div>
          <div className={styles.carrotCardItem} />
          <img
            className={styles.bba003827272830485a6b84d4dLarIcon}
            alt=""
            src="/851951bba003827272830485a6b84d4d-largeremovebgpreview-3@2x.png"
          />
        </button>
      </div>
      {isCarrotPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCarrotPopUp}
        >
          <ProductPopup onClose={closeCarrotPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default CarrotCard;
