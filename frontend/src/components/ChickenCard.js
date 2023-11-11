import { useState, useMemo, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./ChickenCard.module.css";
import ProductPopup from "./ProductPopup";
import { usePopupContext } from "../context/PopupContext";
const ChickenCard = ({
  onionCardPosition,
  onionCardWidth,
  onionCardHeight,
  onionCardTop,
  onionCardRight,
  onionCardBottom,
  onionCardLeft,
}) => {
  const { setSelectedProduct } = usePopupContext();
  const openPopup = () => {
    setSelectedProduct({
      name: "Chicken",
      price: "2500",
      weight: "2",
      imageSrc: "/chicken.png",
    });
    openOnionPopUp();
  };

  const [isOnionPopUpOpen, setOnionPopUpOpen] = useState(false);
  const onionCardStyle = useMemo(() => {
    return {
      position: onionCardPosition,
      width: onionCardWidth,
      height: onionCardHeight,
      top: onionCardTop,
      right: onionCardRight,
      bottom: onionCardBottom,
      left: onionCardLeft,
    };
  }, [
    onionCardPosition,
    onionCardWidth,
    onionCardHeight,
    onionCardTop,
    onionCardRight,
    onionCardBottom,
    onionCardLeft,
  ]);

  const openOnionPopUp = useCallback(() => {
    setOnionPopUpOpen(true);
  }, []);

  const closeOnionPopUp = useCallback(() => {
    setOnionPopUpOpen(false);
  }, []);

  return (
    <>
      <div>
        <button className={styles.onionCard} style={onionCardStyle}>
          <div className={styles.onionCardChild} />
          <div className={styles.onions}>Chicken</div>
          <div className={styles.n2000}>N2,500</div>
          <div className={styles.onionCardItem} />
          <img className={styles.pngimg5Icon} alt="" src="/chicken.png" />
        </button>
      </div>
      {isOnionPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOnionPopUp}
        >
          <ProductPopup onClose={closeOnionPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default ChickenCard;
