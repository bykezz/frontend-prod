import { useMemo } from "react";
import styles from "./CargoExpressCard2.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const CargoExpressCard2 = ({
  cargoExpressCard2Position,
  cargoExpressCard2Width,
  cargoExpressCard2Height,
  cargoExpressCard2Top,
  cargoExpressCard2Right,
  cargoExpressCard2Bottom,
  cargoExpressCard2Left,
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

  const cargoExpressCard2Style = useMemo(() => {
    return {
      position: cargoExpressCard2Position,
      width: cargoExpressCard2Width,
      height: cargoExpressCard2Height,
      top: cargoExpressCard2Top,
      right: cargoExpressCard2Right,
      bottom: cargoExpressCard2Bottom,
      left: cargoExpressCard2Left,
    };
  }, [
    cargoExpressCard2Position,
    cargoExpressCard2Width,
    cargoExpressCard2Height,
    cargoExpressCard2Top,
    cargoExpressCard2Right,
    cargoExpressCard2Bottom,
    cargoExpressCard2Left,
  ]);

  return (
    <button
      className={styles.cargoExpressCard2}
      style={cargoExpressCard2Style}
      onClick={onCargoCardClick}
    >
      <img
        className={styles.cargoExpressCard2Child}
        alt=""
        src="/rectangle-1321@2x.png"
      />
      <div className={styles.cargoExpressParent}>
        <div className={styles.cargoExpress}>Cargo Express</div>
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

export default CargoExpressCard2;
