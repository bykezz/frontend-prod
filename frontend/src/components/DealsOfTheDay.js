import { useMemo } from "react";
import styles from "./DealsOfTheDay.module.css";
const DealsOfTheDay = () => {
  return (
    <div className={styles.bestseller}>
      <div className={styles.bestsellerChild} />
      <div className={styles.dealsOfThe}>Deals of the Day</div>
      <div className={styles.bestsellerItem} />
      <div className={styles.bestsellerInner} />
      <div className={styles.lineDiv} />
      <div className={styles.pngTomato187022Parent}>
        <img className={styles.pngTomato187022Icon} alt="" src="/cow.png" />
        <div className={styles.tomatoes}>Cow</div>
        <img className={styles.groupChild} alt="" src="/group-131.svg" />
        <div className={styles.n20000}>N20,000</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.onionsParent}>
          <div className={styles.onions}>Chicken</div>
          <img className={styles.groupItem} alt="" src="/group-131.svg" />
          <div className={styles.n200001}>3,000</div>
        </div>
        <img className={styles.pngimg4Icon} alt="" src="/chicken.png" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.potatoesParent}>
          <div className={styles.potatoes}>Turkey</div>
          <img className={styles.groupItem} alt="" src="/group-132.svg" />
          <div className={styles.n200001}>N10,000</div>
        </div>
      </div>
      <img className={styles.potatoPngImages2Icon} alt="" src="/turkey.png" />
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

export default DealsOfTheDay;
