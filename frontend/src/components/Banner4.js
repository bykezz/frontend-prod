import styles from "./Banner4.module.css";

const Banner4 = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <button className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.hireAVehicle}>HIRE A VEHICLE</div>
        </button>
        <img
          className={styles.trucks1RemovebgPreview1Icon}
          alt=""
          src="/trucks1removebgpreview-1@2x.png"
        />
        <div className={styles.getYourProduce}>
          GET YOUR PRODUCE DELIVERED SAFELY
        </div>
      </div>
    </div>
  );
};

export default Banner4;
