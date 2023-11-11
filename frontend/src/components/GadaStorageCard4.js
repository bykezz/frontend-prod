import { useMemo } from "react";
import styles from "./GadaStorageCard4.module.css";
import { useStorageContext } from "../context/StorageProductContext";
const GadaStorageCard4 = ({
  gadaStorageCard4Position,
  gadaStorageCard4Width,
  gadaStorageCard4Height,
  gadaStorageCard4Top,
  gadaStorageCard4Right,
  gadaStorageCard4Bottom,
  gadaStorageCard4Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onGadaCardClick = () => {
    setSelectedStorage({
      name: "Gada Warehouse",
      imageSrc: "/rectangle-1313@2x.png",
    });
    onStorageCardClick();
  };

  const gadaStorageCard4Style = useMemo(() => {
    return {
      position: gadaStorageCard4Position,
      width: gadaStorageCard4Width,
      height: gadaStorageCard4Height,
      top: gadaStorageCard4Top,
      right: gadaStorageCard4Right,
      bottom: gadaStorageCard4Bottom,
      left: gadaStorageCard4Left,
    };
  }, [
    gadaStorageCard4Position,
    gadaStorageCard4Width,
    gadaStorageCard4Height,
    gadaStorageCard4Top,
    gadaStorageCard4Right,
    gadaStorageCard4Bottom,
    gadaStorageCard4Left,
  ]);

  return (
    <button
      className={styles.gadaStorageCard4}
      style={gadaStorageCard4Style}
      onClick={onGadaCardClick}
    >
      <img
        className={styles.gadaStorageCard4Child}
        alt=""
        src="/rectangle-1313@2x.png"
      />
      <div className={styles.gadaWarehouseParent}>
        <div className={styles.gadaWarehouse}>Gada Warehouse</div>
        <div className={styles.div}>4.5</div>
        <div className={styles.locationLagos}>Location: Lagos</div>
        <img
          className={styles.materialSymbolsstarIcon}
          alt=""
          src="/materialsymbolsstar.svg"
        />
      </div>
    </button>
  );
};

export default GadaStorageCard4;
