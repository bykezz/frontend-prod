import { useMemo } from "react";
import styles from "./GadaStorageCard1.module.css";
import { useStorageContext } from "../context/StorageProductContext";
const GadaStorageCard1 = ({
  gadaStorageCard1Position,
  gadaStorageCard1Width,
  gadaStorageCard1Height,
  gadaStorageCard1Top,
  gadaStorageCard1Right,
  gadaStorageCard1Bottom,
  gadaStorageCard1Left,
  onStorageCardClick,
}) => {
  const { setSelectedStorage } = useStorageContext();
  const onGadaCardClick = () => {
    setSelectedStorage({
      name: "Gada Warehouse",
      imageSrc: "/rectangle-1316@2x.png",
    });
    onStorageCardClick();
  };

  const gadaStorageCard1Style = useMemo(() => {
    return {
      position: gadaStorageCard1Position,
      width: gadaStorageCard1Width,
      height: gadaStorageCard1Height,
      top: gadaStorageCard1Top,
      right: gadaStorageCard1Right,
      bottom: gadaStorageCard1Bottom,
      left: gadaStorageCard1Left,
    };
  }, [
    gadaStorageCard1Position,
    gadaStorageCard1Width,
    gadaStorageCard1Height,
    gadaStorageCard1Top,
    gadaStorageCard1Right,
    gadaStorageCard1Bottom,
    gadaStorageCard1Left,
  ]);

  return (
    <button
      className={styles.gadaStorageCard1}
      style={gadaStorageCard1Style}
      onClick={onGadaCardClick}
    >
      <img
        className={styles.gadaStorageCard1Child}
        alt=""
        src="/rectangle-1316@2x.png"
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

export default GadaStorageCard1;
