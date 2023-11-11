import { useState, useMemo, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./GoatCard.module.css";
import ProductPopup from "./ProductPopup";
import { usePopupContext } from "../context/PopupContext";
const GoatCard = ({
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
      name: "Goat",
      price: "20,500",
      weight: "2",
      imageSrc: "/goat.png",
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
          <div className={styles.onions}>Goat</div>
          <div className={styles.n2000}>N20,500</div>
          <div className={styles.onionCardItem} />
          <img className={styles.pngimg5Icon} alt="" src="/goat.png" />
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

export default GoatCard;
