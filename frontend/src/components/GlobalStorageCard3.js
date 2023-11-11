import { useMemo } from "react";
import styles from "./GlobalStorageCard3.module.css";
import { useStorageContext } from "../context/StorageProductContext";
const GlobalStorageCard3 = ({
  globalStorageCard3Position,
  globalStorageCard3Width,
  globalStorageCard3Height,
  globalStorageCard3Top,
  globalStorageCard3Right,
  globalStorageCard3Bottom,
  globalStorageCard3Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onGlobalCardClick = () => {
    setSelectedStorage({
      name: "Global Storage Facility Ltd.",
      imageSrc: "/rectangle-1302@2x.png",
    });
    onStorageCardClick();
  };
  const globalStorageCard3Style = useMemo(() => {
    return {
      position: globalStorageCard3Position,
      width: globalStorageCard3Width,
      height: globalStorageCard3Height,
      top: globalStorageCard3Top,
      right: globalStorageCard3Right,
      bottom: globalStorageCard3Bottom,
      left: globalStorageCard3Left,
    };
  }, [
    globalStorageCard3Position,
    globalStorageCard3Width,
    globalStorageCard3Height,
    globalStorageCard3Top,
    globalStorageCard3Right,
    globalStorageCard3Bottom,
    globalStorageCard3Left,
  ]);

  return (
    <button
      className={styles.globalStorageCard3}
      style={globalStorageCard3Style}
      onClick={onGlobalCardClick}
    >
      <img
        className={styles.globalStorageCard3Child}
        alt=""
        src="/rectangle-1302@2x.png"
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

export default GlobalStorageCard3;
