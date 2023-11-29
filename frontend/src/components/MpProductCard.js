import { useState, useMemo, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./MpProductCard.module.css";
import ProductPopup1 from "./ProductPopup1";
const MpProductCard = ({ product, productImage }) => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isHeart, setHeart] = useState(true);

  const openPopUp = useCallback(() => {
    setPopUpOpen(true);
  }, []);

  const closePopUp = useCallback(() => {
    setPopUpOpen(false);
  }, []);
  const handleHeart = () => {
    setHeart(!isHeart);
  };

  return (
    <>
      <div className={styles.rectangleParent}>
        <div className={styles.componentChild} />
        <div className={styles.lettuce}>{product.name}</div>
        <b className={styles.n180kg}>₦{product.price}/kg</b>
        <img
          className={styles.lettuceRemovebgPreview2Icon}
          alt=""
          src={productImage}
          onClick={openPopUp}
        />
        <button className={styles.rectangleGroup} onClick={openPopUp}>
          <div className={styles.groupChild} />
          <div className={styles.viewProduct}>View Product</div>
        </button>

        <img className={styles.componentInner} alt="" src="/group-344.svg" />
        <button onClick={handleHeart}>
          <img
            className={styles.vectorIcon}
            alt=""
            src={isHeart ? "/phheartthin.svg" : "/phheartthin1.svg"}
          />
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
