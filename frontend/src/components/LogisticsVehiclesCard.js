import styles from "./LogisticsVehiclesCard.module.css";
const LogisticsVehiclesCard = ({ vehicle }) => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.truckWrapper}>
        <div className={styles.truck}>{vehicle.type}</div>
      </div>
      <div className={styles.capacity1000050000}>Price: N{vehicle.price}</div>
      <img
        className={styles.groupChild1}
        alt=""
        src={vehicle.logistics_images[0].image}
      />
    </div>
  );
};

export default LogisticsVehiclesCard;
