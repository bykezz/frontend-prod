import { useMemo } from "react";
import styles from "./GlobalStorageCard4.module.css";
import { useStorageContext } from "../context/StorageProductContext";
const GlobalStorageCard4 = ({
  globalStorageCard4Position,
  globalStorageCard4Width,
  globalStorageCard4Height,
  globalStorageCard4Top,
  globalStorageCard4Right,
  globalStorageCard4Bottom,
  globalStorageCard4Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onGlobalCardClick = () => {
    setSelectedStorage({
      name: "Global Storage Facility Ltd.",
      imageSrc: "/rectangle-1301@2x.png",
    });
    onStorageCardClick();
  };

  const globalStorageCard4Style = useMemo(() => {
    return {
      position: globalStorageCard4Position,
      width: globalStorageCard4Width,
      height: globalStorageCard4Height,
      top: globalStorageCard4Top,
      right: globalStorageCard4Right,
      bottom: globalStorageCard4Bottom,
      left: globalStorageCard4Left,
    };
  }, [
    globalStorageCard4Position,
    globalStorageCard4Width,
    globalStorageCard4Height,
    globalStorageCard4Top,
    globalStorageCard4Right,
    globalStorageCard4Bottom,
    globalStorageCard4Left,
  ]);

  return (
    <button
      className={styles.globalStorageCard4}
      style={globalStorageCard4Style}
      onClick={onGlobalCardClick}
    >
      <img
        className={styles.globalStorageCard4Child}
        alt=""
        src="/rectangle-1301@2x.png"
      />
      <div className={styles.globalStorageFacilityLtdParent}>
        <div className={styles.globalStorageFacility}>
          Global Storage Facility Ltd.
        </div>
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

export default GlobalStorageCard4;
