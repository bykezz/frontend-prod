import { useMemo } from "react";
import styles from "./GlobalStorageCard2.module.css";
import { useStorageContext } from "../context/StorageProductContext";
const GlobalStorageCard2 = ({
  globalStorageCard2Position,
  globalStorageCard2Width,
  globalStorageCard2Height,
  globalStorageCard2Top,
  globalStorageCard2Right,
  globalStorageCard2Bottom,
  globalStorageCard2Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onGlobalCardClick = () => {
    setSelectedStorage({
      name: "Global Storage Facility Ltd.",
      imageSrc: "/rectangle-1303@2x.png",
    });
    onStorageCardClick();
  };
  const globalStorageCard2Style = useMemo(() => {
    return {
      position: globalStorageCard2Position,
      width: globalStorageCard2Width,
      height: globalStorageCard2Height,
      top: globalStorageCard2Top,
      right: globalStorageCard2Right,
      bottom: globalStorageCard2Bottom,
      left: globalStorageCard2Left,
    };
  }, [
    globalStorageCard2Position,
    globalStorageCard2Width,
    globalStorageCard2Height,
    globalStorageCard2Top,
    globalStorageCard2Right,
    globalStorageCard2Bottom,
    globalStorageCard2Left,
  ]);

  return (
    <button
      className={styles.globalStorageCard2}
      style={globalStorageCard2Style}
      onClick={onGlobalCardClick}
    >
      <img
        className={styles.globalStorageCard2Child}
        alt=""
        src="/rectangle-1303@2x.png"
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

export default GlobalStorageCard2;
