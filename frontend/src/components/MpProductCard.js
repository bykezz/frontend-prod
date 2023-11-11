import { useState, useMemo, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./MpProductCard.module.css";
import ProductPopup1 from "./ProductPopup1";
const MpProductCard = ({
  onionCardPosition,
  onionCardWidth,
  onionCardHeight,
  onionCardTop,
  onionCardRight,
  onionCardBottom,
  onionCardLeft,
  product,
  productImage,
}) => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
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

  const openPopUp = useCallback(() => {
    setPopUpOpen(true);
  }, []);

  const closePopUp = useCallback(() => {
    setPopUpOpen(false);
  }, []);

  return (
    <>
      <div>
        <button
          className={styles.onionCard}
          onClick={openPopUp}
          style={onionCardStyle}
        >
          <div className={styles.onionCardChild} />
          <div className={styles.onions}>{product.name}</div>
          <div className={styles.n2000}>₦{product.price}</div>
          <div className={styles.onionCardItem} />
          <img className={styles.pngimg5Icon} alt="" src={productImage} />
        </button>
      </div>
      {isPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopUp}
        >
          <ProductPopup1
            onClose={closePopUp}
            product={product}
            productImage={productImage}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default MpProductCard;
