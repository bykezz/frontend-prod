import { useMemo } from "react";
import styles from "./KaniStorageCard4.module.css";
import { useStorageContext } from "../context/StorageProductContext";
const KaniStorageCard4 = ({
  kaniStorageCard4Position,
  kaniStorageCard4Width,
  kaniStorageCard4Height,
  kaniStorageCard4Top,
  kaniStorageCard4Right,
  kaniStorageCard4Bottom,
  kaniStorageCard4Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onKaniCardClick = () => {
    setSelectedStorage({
      name: "Kani Storage House",
      imageSrc: "/rectangle-1323@2x.png",
    });
    onStorageCardClick();
  };

  const kaniStorageCard4Style = useMemo(() => {
    return {
      position: kaniStorageCard4Position,
      width: kaniStorageCard4Width,
      height: kaniStorageCard4Height,
      top: kaniStorageCard4Top,
      right: kaniStorageCard4Right,
      bottom: kaniStorageCard4Bottom,
      left: kaniStorageCard4Left,
    };
  }, [
    kaniStorageCard4Position,
    kaniStorageCard4Width,
    kaniStorageCard4Height,
    kaniStorageCard4Top,
    kaniStorageCard4Right,
    kaniStorageCard4Bottom,
    kaniStorageCard4Left,
  ]);

  return (
    <button
      className={styles.kaniStorageCard4}
      onClick={onKaniCardClick}
      style={kaniStorageCard4Style}
    >
      <img
        className={styles.kaniStorageCard4Child}
        alt=""
        src="/rectangle-1323@2x.png"
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

export default KaniStorageCard4;
