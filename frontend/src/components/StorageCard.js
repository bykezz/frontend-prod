import styles from "./StorageCard.module.css";
import { useStorageContext } from "../context/StorageProductContext";

const StorageCard = ({ onStorageCardClick, facility, facilityImage }) => {
  const { setSelectedStorage } = useStorageContext();
  const onGlobalCardClick = () => {
    setSelectedStorage({
      name: facility.type,
      imageSrc: facilityImage,
    });
    onStorageCardClick();
  };

  return (
    <button className={styles.globalStorageCard1} onClick={onGlobalCardClick}>
      <img
        className={styles.globalStorageCard1Child}
        alt=""
        src={facilityImage}
      />
      <div className={styles.globalStorageFacilityLtdParent}>
        <div className={styles.globalStorageFacility}>
          {facility.storage_name}
        </div>
        <div className={styles.div}>4.5</div>
        <div className={styles.locationAbuja}>Location: {facility.state}</div>
        <img
          className={styles.materialSymbolsstarIcon}
          alt=""
          src="/materialsymbolsstar.svg"
        />
      </div>
    </button>
  );
};

export default StorageCard;
