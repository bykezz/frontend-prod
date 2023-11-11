import { useMemo } from "react";
import styles from "./KaniStorageCard3.module.css";
import { useStorageContext } from "../context/StorageProductContext";

const KaniStorageCard3 = ({
  kaniStorageCard3Position,
  kaniStorageCard3Width,
  kaniStorageCard3Height,
  kaniStorageCard3Top,
  kaniStorageCard3Right,
  kaniStorageCard3Bottom,
  kaniStorageCard3Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onKaniCardClick = () => {
    setSelectedStorage({
      name: "Kani Storage House",
      imageSrc: "/rectangle-1324@2x.png",
    });
    onStorageCardClick();
  };

  const kaniStorageCard3Style = useMemo(() => {
    return {
      position: kaniStorageCard3Position,
      width: kaniStorageCard3Width,
      height: kaniStorageCard3Height,
      top: kaniStorageCard3Top,
      right: kaniStorageCard3Right,
      bottom: kaniStorageCard3Bottom,
      left: kaniStorageCard3Left,
    };
  }, [
    kaniStorageCard3Position,
    kaniStorageCard3Width,
    kaniStorageCard3Height,
    kaniStorageCard3Top,
    kaniStorageCard3Right,
    kaniStorageCard3Bottom,
    kaniStorageCard3Left,
  ]);

  return (
    <button
      className={styles.kaniStorageCard3}
      onClick={onKaniCardClick}
      style={kaniStorageCard3Style}
    >
      <img
        className={styles.kaniStorageCard3Child}
        alt=""
        src="/rectangle-1324@2x.png"
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

export default KaniStorageCard3;
