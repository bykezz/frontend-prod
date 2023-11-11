import { useMemo } from "react";
import styles from "./BestSeller.module.css";
const BestSeller = () => {
  return (
    <div className={styles.bestseller}>
      <div className={styles.bestsellerChild} />
      <div className={styles.bestSeller}>Best Seller</div>
      <div className={styles.bestsellerItem} />
      <div className={styles.bestsellerInner} />
      <div className={styles.lineDiv} />
      <div className={styles.pngTomato187022Parent}>
        <img className={styles.pngTomato187022Icon} alt="" src="/turkey.png" />
        <div className={styles.tomatoes}>Turkey</div>
        <img className={styles.groupChild} alt="" src="/group-131.svg" />
        <div className={styles.n20000}>N20,000</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.onionsParent}>
          <div className={styles.onions}>Snail</div>
          <img className={styles.groupItem} alt="" src="/group-131.svg" />
          <div className={styles.n200001}>N5,000</div>
        </div>
        <img className={styles.pngimg4Icon} alt="" src="/snail.png" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.potatoesParent}>
          <div className={styles.potatoes}>Potatoes</div>
          <img className={styles.groupItem} alt="" src="/group-132.svg" />
          <div className={styles.n200001}>N20,000</div>
        </div>
      </div>
      <img
        className={styles.potatoPngImages2Icon}
        alt=""
        src="/23potatopngimages-2@2x.png"
      />
      <button className={styles.viewMoreParent}>
        <div className={styles.viewMore}>View More</div>
        <img
          className={styles.riarrowUpSLineIcon}
          alt=""
          src="/riarrowupsline5.svg"
        />
      </button>
    </div>
  );
};

export default BestSeller;
