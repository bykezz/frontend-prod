import { useMemo } from "react";
import styles from "./GadaStorageCard2.module.css";
import { useStorageContext } from "../context/StorageProductContext";

const GadaStorageCard2 = ({
  gadaStorageCard2Position,
  gadaStorageCard2Width,
  gadaStorageCard2Height,
  gadaStorageCard2Top,
  gadaStorageCard2Right,
  gadaStorageCard2Bottom,
  gadaStorageCard2Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onGadaCardClick = () => {
    setSelectedStorage({
      name: "Gada Warehouse",
      imageSrc: "/rectangle-1315@2x.png",
    });
    onStorageCardClick();
  };

  const gadaStorageCard2Style = useMemo(() => {
    return {
      position: gadaStorageCard2Position,
      width: gadaStorageCard2Width,
      height: gadaStorageCard2Height,
      top: gadaStorageCard2Top,
      right: gadaStorageCard2Right,
      bottom: gadaStorageCard2Bottom,
      left: gadaStorageCard2Left,
    };
  }, [
    gadaStorageCard2Position,
    gadaStorageCard2Width,
    gadaStorageCard2Height,
    gadaStorageCard2Top,
    gadaStorageCard2Right,
    gadaStorageCard2Bottom,
    gadaStorageCard2Left,
  ]);

  return (
    <button
      className={styles.gadaStorageCard2}
      style={gadaStorageCard2Style}
      onClick={onGadaCardClick}
    >
      <img
        className={styles.gadaStorageCard2Child}
        alt=""
        src="/rectangle-1315@2x.png"
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

export default GadaStorageCard2;
