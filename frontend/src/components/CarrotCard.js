import { useState, useMemo, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./CarrotCard.module.css";
import ProductPopup from "./ProductPopup";
import { usePopupContext } from "../context/PopupContext";

const CarrotCard = ({}) => {
  const [isHeart, setHeart] = useState(true);
  const handleHeart = () => {
    setHeart(!isHeart);
  };

  return (
    <>
      <div className={styles.rectangleParent}>
        <div className={styles.componentChild} />
        <div className={styles.lettuce}>Carrot</div>
        <b className={styles.n180kg}>₦2000/kg</b>
        <img
          className={styles.lettuceRemovebgPreview2Icon}
          alt=""
          src="/851951bba003827272830485a6b84d4d-largeremovebgpreview-3@2x.png"
        />
        <button className={styles.rectangleGroup}>
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
    </>
  );
};

export default CarrotCard;
