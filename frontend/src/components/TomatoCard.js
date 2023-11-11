import { useState, useMemo, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./TomatoCard.module.css";
import ProductPopup from "./ProductPopup";
import { usePopupContext } from "../context/PopupContext";

const TomatoCard = ({
  tomatoCardPosition,
  tomatoCardWidth,
  tomatoCardHeight,
  tomatoCardTop,
  tomatoCardRight,
  tomatoCardBottom,
  tomatoCardLeft,
}) => {
  const { setSelectedProduct } = usePopupContext();
  const openPopup = () => {
    setSelectedProduct({
      name: "Tomato",
      price: "2000",
      weight: "2",
      imageSrc: "/png-tomato-18702-3@2x.png",
    });
    openTomatoPopUp();
  };

  const [isTomatoPopUpOpen, setTomatoPopUpOpen] = useState(false);
  const tomatoCardStyle = useMemo(() => {
    return {
      position: tomatoCardPosition,
      width: tomatoCardWidth,
      height: tomatoCardHeight,
      top: tomatoCardTop,
      right: tomatoCardRight,
      bottom: tomatoCardBottom,
      left: tomatoCardLeft,
    };
  }, [
    tomatoCardPosition,
    tomatoCardWidth,
    tomatoCardHeight,
    tomatoCardTop,
    tomatoCardRight,
    tomatoCardBottom,
    tomatoCardLeft,
  ]);

  const openTomatoPopUp = useCallback(() => {
    setTomatoPopUpOpen(true);
  }, []);

  const closeTomatoPopUp = useCallback(() => {
    setTomatoPopUpOpen(false);
  }, []);

  return (
    <>
      <div>
        <button className={styles.tomatoCard} style={tomatoCardStyle}>
          <div className={styles.tomatoCardChild} />
          <div className={styles.tomato}>Tomato</div>
          <div className={styles.n2000}>N2,000</div>
          <div className={styles.tomatoCardItem} />
          <img
            className={styles.pngTomato187023Icon}
            alt=""
            src="/png-tomato-18702-3@2x.png"
          />
        </button>
      </div>
      {isTomatoPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTomatoPopUp}
        >
          <ProductPopup onClose={closeTomatoPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default TomatoCard;
