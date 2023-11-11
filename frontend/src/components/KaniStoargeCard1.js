import { useMemo } from "react";
import styles from "./KaniStoargeCard1.module.css";
import { useStorageContext } from "../context/StorageProductContext";

const KaniStoargeCard1 = ({
  kaniStoargeCard1Position,
  kaniStoargeCard1Width,
  kaniStoargeCard1Height,
  kaniStoargeCard1Top,
  kaniStoargeCard1Right,
  kaniStoargeCard1Bottom,
  kaniStoargeCard1Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onKaniCardClick = () => {
    setSelectedStorage({
      name: "Kani Storage House",
      imageSrc: "/rectangle-1326@2x.png",
    });
    onStorageCardClick();
  };

  const kaniStoargeCard1Style = useMemo(() => {
    return {
      position: kaniStoargeCard1Position,
      width: kaniStoargeCard1Width,
      height: kaniStoargeCard1Height,
      top: kaniStoargeCard1Top,
      right: kaniStoargeCard1Right,
      bottom: kaniStoargeCard1Bottom,
      left: kaniStoargeCard1Left,
    };
  }, [
    kaniStoargeCard1Position,
    kaniStoargeCard1Width,
    kaniStoargeCard1Height,
    kaniStoargeCard1Top,
    kaniStoargeCard1Right,
    kaniStoargeCard1Bottom,
    kaniStoargeCard1Left,
  ]);

  return (
    <button
      className={styles.kaniStoargeCard1}
      onClick={onKaniCardClick}
      style={kaniStoargeCard1Style}
    >
      <img
        className={styles.kaniStoargeCard1Child}
        alt=""
        src="/rectangle-1326@2x.png"
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

export default KaniStoargeCard1;
