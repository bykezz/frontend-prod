import styles from "./Banner3.module.css";

const Banner3 = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.maizeBadRemovebgPreview1Wrapper}>
        <img
          className={styles.maizeBadRemovebgPreview1Icon}
          alt=""
          src="/maizebadremovebgpreview-1@2x.png"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <button className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.findAStorage}>FIND A STORAGE FACILITY</div>
        </button>
        <div className={styles.protectYourProduce}>
          PROTECT YOUR PRODUCE FROM SPOILAGE
        </div>
        <img
          className={styles.cabbageBadRemovebgPreviewIcon}
          alt=""
          src="/cabbagebadremovebgpreview@2x.png"
        />
        <img
          className={styles.tomatoBadRemovebgPreviewIcon}
          alt=""
          src="/tomatobadremovebgpreview@2x.png"
        />
      </div>
    </div>
  );
};

export default Banner3;
