import { useState, useMemo, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./LettuceCard.module.css";
import ProductPopup from "./ProductPopup";
import { usePopupContext } from "../context/PopupContext";
import { Button } from "antd";
const LettuceCard = ({
  lettuceCardPosition,
  lettuceCardWidth,
  lettuceCardHeight,
  lettuceCardTop,
  lettuceCardRight,
  lettuceCardBottom,
  lettuceCardLeft,
}) => {
  const { setSelectedProduct } = usePopupContext();
  const openPopup = () => {
    setSelectedProduct({
      name: "Lettuce",
      price: "2000",
      weight: "2",
      imageSrc: "/lettuceremovebgpreview-23@2x.png",
    });
    openLettucePopUp();
  };

  const [isLettucePopUpOpen, setLettucePopUpOpen] = useState(false);
  const lettuceCardStyle = useMemo(() => {
    return {
      position: lettuceCardPosition,
      width: lettuceCardWidth,
      height: lettuceCardHeight,
      top: lettuceCardTop,
      right: lettuceCardRight,
      bottom: lettuceCardBottom,
      left: lettuceCardLeft,
    };
  }, [
    lettuceCardPosition,
    lettuceCardWidth,
    lettuceCardHeight,
    lettuceCardTop,
    lettuceCardRight,
    lettuceCardBottom,
    lettuceCardLeft,
  ]);

  const openLettucePopUp = useCallback(() => {
    setLettucePopUpOpen(true);
  }, []);

  const closeLettucePopUp = useCallback(() => {
    setLettucePopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.lettuceCard} style={lettuceCardStyle}>
        <div className={styles.lettuceCardChild} />
        <div className={styles.lettuce}>Lettuce</div>
        <div className={styles.n2000}>N2,000</div>
        <div className={styles.lettuceCardItem} />
        <img
          className={styles.lettuceRemovebgPreview2Icon}
          alt=""
          src="/lettuceremovebgpreview-23@2x.png"
        />
      </div>
      {isLettucePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLettucePopUp}
        >
          <ProductPopup onClose={closeLettucePopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default LettuceCard;
