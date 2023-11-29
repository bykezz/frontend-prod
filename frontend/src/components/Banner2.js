import styles from "./Banner2.module.css";

const Banner2 = () => {
  return (
    <div className={styles.banner2}>
      <div className={styles.banner2Child} />
      <button className={styles.banner2Item}>
        <div className={styles.shopNow}>SHOP NOW</div>
      </button>
      <img
        className={styles.products2RemovebgPreview2Icon}
        alt=""
        src="/products2removebgpreview-2@2x.png"
      />
      <div className={styles.findHugeDiscounts}>
        Find Huge discounts on vegetables
      </div>
    </div>
  );
};

export default Banner2;
