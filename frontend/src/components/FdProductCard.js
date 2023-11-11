import { useState, useCallback } from "react";
import FarmersDealProductDescripti from "./FarmersDealProductDescripti";
import PortalPopup from "./PortalPopup";
import styles from "./FdProductCard.module.css";

const FdProductCard = ({ product, productImage }) => {
  const [
    isFarmersDealProductDescriptiOpen,
    setFarmersDealProductDescriptiOpen,
  ] = useState(false);
  const [isHeart, setHeart] = useState(true);

  const openFarmersDealProductDescripti = useCallback(() => {
    setFarmersDealProductDescriptiOpen(true);
  }, []);

  const closeFarmersDealProductDescripti = useCallback(() => {
    setFarmersDealProductDescriptiOpen(false);
  }, []);

  const handleHeart = () => {
    setHeart(!isHeart);
  };
  return (
    <>
      <div className={styles.rectangleParent}>
        <div className={styles.componentChild} />
        <div className={styles.lettuce}>{product.name}</div>
        <b className={styles.n180kg}>₦{product.sale_price}/kg</b>
        <b className={styles.n200kg}>₦{product.regular_price}/kg</b>
        <div className={styles.sunnyFarms}>{product.farmer}</div>
        <img
          className={styles.lettuceRemovebgPreview2Icon}
          alt=""
          src={productImage}
          onClick={openFarmersDealProductDescripti}
        />
        <button
          className={styles.rectangleGroup}
          onClick={openFarmersDealProductDescripti}
        >
          <div className={styles.groupChild} />
          <div className={styles.viewProduct}>View Product</div>
        </button>
        <img className={styles.componentItem} alt="" src="/line-62.svg" />
        <img className={styles.componentInner} alt="" src="/group-344.svg" />
        <button onClick={handleHeart}>
          <img
            className={styles.vectorIcon}
            alt=""
            src={isHeart ? "/phheartthin.svg" : "/phheartthin1.svg"}
          />
        </button>
      </div>
      {isFarmersDealProductDescriptiOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFarmersDealProductDescripti}
        >
          <FarmersDealProductDescripti
            product={product}
            productImage={productImage}
            onClose={closeFarmersDealProductDescripti}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default FdProductCard;
