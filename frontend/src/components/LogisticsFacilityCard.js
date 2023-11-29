import styles from "./LogisticsFacilityCard.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const LogisticsFacilityCard = ({
  onTransLogisticsCardClick,
  facility,
  facilityImage,
}) => {
  const { setSelectedProduct } = useProductContext();

  const onRollingLoudCardClick = () => {
    setSelectedProduct({
      name: facility.type,
      imageSrc: facilityImage,
    });
    onTransLogisticsCardClick();
  };

  return (
    <button
      className={styles.rollingLoudCard1}
      onClick={onRollingLoudCardClick}
    >
      <img
        className={styles.rollingLoudCard1Child}
        alt=""
        src={facilityImage}
      />
      <div className={styles.rollingLoudLtdParent}>
        <div className={styles.rollingLoudLtd}>{facility.logistics_name}</div>
        <div className={styles.div}>4.5</div>
        <div className={styles.locationAbuja}>Location: Abuja</div>
        <img
          className={styles.materialSymbolsstarIcon}
          alt=""
          src="/materialsymbolsstar.svg"
        />
      </div>
    </button>
  );
};

export default LogisticsFacilityCard;
