import { useState, useMemo, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./SpinachCard.module.css";
import ProductPopup from "./ProductPopup";
import { usePopupContext } from "../context/PopupContext";

const SpinachCard = ({
  spinachCardPosition,
  spinachCardWidth,
  spinachCardHeight,
  spinachCardTop,
  spinachCardRight,
  spinachCardBottom,
  spinachCardLeft,
}) => {
  const { setSelectedProduct } = usePopupContext();
  const openPopup = () => {
    setSelectedProduct({
      name: "Spinach",
      price: "2000",
      weight: "2",
      imageSrc: "/freshchinesespinachpngclipart-3@2x.png",
    });
    openSpinachPopUp();
  };

  const [isSpinachPopUpOpen, setSpinachPopUpOpen] = useState(false);
  const spinachCardStyle = useMemo(() => {
    return {
      position: spinachCardPosition,
      width: spinachCardWidth,
      height: spinachCardHeight,
      top: spinachCardTop,
      right: spinachCardRight,
      bottom: spinachCardBottom,
      left: spinachCardLeft,
    };
  }, [
    spinachCardPosition,
    spinachCardWidth,
    spinachCardHeight,
    spinachCardTop,
    spinachCardRight,
    spinachCardBottom,
    spinachCardLeft,
  ]);

  const openSpinachPopUp = useCallback(() => {
    setSpinachPopUpOpen(true);
  }, []);

  const closeSpinachPopUp = useCallback(() => {
    setSpinachPopUpOpen(false);
  }, []);

  return (
    <>
      <div>
        <button className={styles.spinachCard} style={spinachCardStyle}>
          <div className={styles.spinachCardChild} />
          <div className={styles.spinach}>Spinach</div>
          <div className={styles.n2000}>N2,000</div>
          <div className={styles.spinachCardItem} />
          <img
            className={styles.freshChineseSpinachPngClipIcon}
            alt=""
            src="/freshchinesespinachpngclipart-3@2x.png"
          />
        </button>

        {isSpinachPopUpOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeSpinachPopUp}
          >
            <ProductPopup onClose={closeSpinachPopUp} />
          </PortalPopup>
        )}
      </div>
    </>
  );
};

export default SpinachCard;
