import { useMemo } from "react";
import styles from "./GadaStorageCard3.module.css";
import { useStorageContext } from "../context/StorageProductContext";

const GadaStorageCard3 = ({
  gadaStorageCard3Position,
  gadaStorageCard3Width,
  gadaStorageCard3Height,
  gadaStorageCard3Top,
  gadaStorageCard3Right,
  gadaStorageCard3Bottom,
  gadaStorageCard3Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onGadaCardClick = () => {
    setSelectedStorage({
      name: "Gada Warehouse",
      imageSrc: "/rectangle-1314@2x.png",
    });
    onStorageCardClick();
  };

  const gadaStorageCard3Style = useMemo(() => {
    return {
      position: gadaStorageCard3Position,
      width: gadaStorageCard3Width,
      height: gadaStorageCard3Height,
      top: gadaStorageCard3Top,
      right: gadaStorageCard3Right,
      bottom: gadaStorageCard3Bottom,
      left: gadaStorageCard3Left,
    };
  }, [
    gadaStorageCard3Position,
    gadaStorageCard3Width,
    gadaStorageCard3Height,
    gadaStorageCard3Top,
    gadaStorageCard3Right,
    gadaStorageCard3Bottom,
    gadaStorageCard3Left,
  ]);

  return (
    <button
      className={styles.gadaStorageCard3}
      style={gadaStorageCard3Style}
      onClick={onGadaCardClick}
    >
      <img
        className={styles.gadaStorageCard3Child}
        alt=""
        src="/rectangle-1314@2x.png"
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

export default GadaStorageCard3;
