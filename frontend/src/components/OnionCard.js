import { useState, useMemo, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./OnionCard.module.css";
import ProductPopup from "./ProductPopup";
import { usePopupContext } from "../context/PopupContext";
const OnionCard = ({
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
      name: "Onions",
      price: "2000",
      weight: "2",
      imageSrc: "/pngimg-51@2x.png",
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
          <div className={styles.onions}>Onions</div>
          <div className={styles.n2000}>N2,000</div>
          <div className={styles.onionCardItem} />
          <img className={styles.pngimg5Icon} alt="" src="/pngimg-51@2x.png" />
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

export default OnionCard;
