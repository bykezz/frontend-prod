import styles from "./Banner1.module.css";

const Banner1 = () => {
  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.componentChild}
        alt=""
        src="/rectangle-180@2x.png"
      />
      <button className={styles.componentItem}>
        <div className={styles.shopNow}>SHOP NOW</div>
      </button>
      <img
        className={styles.products2RemovebgPreview1Icon}
        alt=""
        src="/products2removebgpreview@2x.png"
      />
      <div
        className={styles.shopProductsFresh}
      >{`Shop products fresh from the farm `}</div>
    </div>
  );
};

export default Banner1;
