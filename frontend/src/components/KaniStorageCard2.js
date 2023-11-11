import { useMemo } from "react";
import styles from "./KaniStorageCard2.module.css";
import { useStorageContext } from "../context/StorageProductContext";
const KaniStorageCard2 = ({
  kaniStorageCard2Position,
  kaniStorageCard2Width,
  kaniStorageCard2Height,
  kaniStorageCard2Top,
  kaniStorageCard2Right,
  kaniStorageCard2Bottom,
  kaniStorageCard2Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onKaniCardClick = () => {
    setSelectedStorage({
      name: "Kani Storage House",
      imageSrc: "/rectangle-1325@2x.png",
    });
    onStorageCardClick();
  };

  const kaniStorageCard2Style = useMemo(() => {
    return {
      position: kaniStorageCard2Position,
      width: kaniStorageCard2Width,
      height: kaniStorageCard2Height,
      top: kaniStorageCard2Top,
      right: kaniStorageCard2Right,
      bottom: kaniStorageCard2Bottom,
      left: kaniStorageCard2Left,
    };
  }, [
    kaniStorageCard2Position,
    kaniStorageCard2Width,
    kaniStorageCard2Height,
    kaniStorageCard2Top,
    kaniStorageCard2Right,
    kaniStorageCard2Bottom,
    kaniStorageCard2Left,
  ]);

  return (
    <button
      className={styles.kaniStorageCard2}
      onClick={onKaniCardClick}
      style={kaniStorageCard2Style}
    >
      <img
        className={styles.kaniStorageCard2Child}
        alt=""
        src="/rectangle-1325@2x.png"
      />
      <div className={styles.kaniStorageHouseParent}>
        <div className={styles.kaniStorageHouse}>Kani Storage House</div>
        <div className={styles.div}>4.5</div>
        <div className={styles.locationPortharcourt}>
          Location: Portharcourt
        </div>
        <img
          className={styles.materialSymbolsstarIcon}
          alt=""
          src="/materialsymbolsstar.svg"
        />
      </div>
    </button>
  );
};

export default KaniStorageCard2;
