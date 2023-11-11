import { useMemo } from "react";
import styles from "./GlobalStorageCard1.module.css";
import { useStorageContext } from "../context/StorageProductContext";
const GlobalStorageCard1 = ({
  globalStorageCard1Position,
  globalStorageCard1Width,
  globalStorageCard1Height,
  globalStorageCard1Top,
  globalStorageCard1Right,
  globalStorageCard1Bottom,
  globalStorageCard1Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onGlobalCardClick = () => {
    setSelectedStorage({
      name: "Global Storage Facility Ltd.",
      imageSrc: "/rectangle-1304@2x.png",
    });
    onStorageCardClick();
  };
  const globalStorageCard1Style = useMemo(() => {
    return {
      position: globalStorageCard1Position,
      width: globalStorageCard1Width,
      height: globalStorageCard1Height,
      top: globalStorageCard1Top,
      right: globalStorageCard1Right,
      bottom: globalStorageCard1Bottom,
      left: globalStorageCard1Left,
    };
  }, [
    globalStorageCard1Position,
    globalStorageCard1Width,
    globalStorageCard1Height,
    globalStorageCard1Top,
    globalStorageCard1Right,
    globalStorageCard1Bottom,
    globalStorageCard1Left,
  ]);

  return (
    <button
      className={styles.globalStorageCard1}
      style={globalStorageCard1Style}
      onClick={onGlobalCardClick}
    >
      <img
        className={styles.globalStorageCard1Child}
        alt=""
        src="/rectangle-1304@2x.png"
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

export default GlobalStorageCard1;
