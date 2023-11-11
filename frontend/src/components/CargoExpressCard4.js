import { useMemo } from "react";
import styles from "./CargoExpressCard4.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const CargoExpressCard4 = ({
  cargoExpressCard4Position,
  cargoExpressCard4Width,
  cargoExpressCard4Height,
  cargoExpressCard4Top,
  cargoExpressCard4Right,
  cargoExpressCard4Bottom,
  cargoExpressCard4Left,
  onTransLogisticsCardClick,
}) => {
  const { setSelectedProduct } = useProductContext();
  const onCargoCardClick = () => {
    setSelectedProduct({
      name: "Cargo Express",
      imageSrc: "/rectangle-1321@2x.png",
    });
    onTransLogisticsCardClick();
  };

  const cargoExpressCard4Style = useMemo(() => {
    return {
      position: cargoExpressCard4Position,
      width: cargoExpressCard4Width,
      height: cargoExpressCard4Height,
      top: cargoExpressCard4Top,
      right: cargoExpressCard4Right,
      bottom: cargoExpressCard4Bottom,
      left: cargoExpressCard4Left,
    };
  }, [
    cargoExpressCard4Position,
    cargoExpressCard4Width,
    cargoExpressCard4Height,
    cargoExpressCard4Top,
    cargoExpressCard4Right,
    cargoExpressCard4Bottom,
    cargoExpressCard4Left,
  ]);

  return (
    <button
      className={styles.cargoExpressCard4}
      style={cargoExpressCard4Style}
      onClick={onCargoCardClick}
    >
      <img
        className={styles.cargoExpressCard4Child}
        alt=""
        src="/rectangle-1321@2x.png"
      />
      <div className={styles.cargoExpressParent}>
        <div className={styles.cargoExpress}>Cargo Express</div>
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

export default CargoExpressCard4;
