import { useState, useMemo, useCallback } from "react";
import ProductPopup from "./ProductPopup";
import PortalPopup from "./PortalPopup";
import styles from "./RedPepperCard.module.css";
import { usePopupContext } from "../context/PopupContext";
const RedPepperCard = ({}) => {
  const [isHeart, setHeart] = useState(true);
  const handleHeart = () => {
    setHeart(!isHeart);
  };

  return (
    <>
      <div className={styles.rectangleParent}>
        <div className={styles.componentChild} />
        <div className={styles.lettuce}>Red Pepper</div>
        <b className={styles.n180kg}>₦1,200/kg</b>
        <img
          className={styles.lettuceRemovebgPreview2Icon}
          alt=""
          src="/sweetredpeppers--copy600x600removebgpreview-2@2x.png"
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

export default RedPepperCard;
