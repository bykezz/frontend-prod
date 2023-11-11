import styles from "./StorageFacilityCard.module.css";

const StorageFaciilityCard = ({ facility }) => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.siloWrapper}>
        <div className={styles.silo}>{facility.type}</div>
      </div>
      <div className={styles.storageCapacity10000}>
        Storage Capacity: {facility.capacity} tonnes
      </div>
      <img
        className={styles.groupChild1}
        alt=""
        src={facility.storage_images[0].image}
      />
    </div>
  );
};
export default StorageFaciilityCard;
