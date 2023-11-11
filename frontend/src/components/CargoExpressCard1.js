import { useMemo } from "react";
import styles from "./CargoExpressCard1.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const CargoExpressCard1 = ({
  cargoExpressCard1Position,
  cargoExpressCard1Width,
  cargoExpressCard1Height,
  cargoExpressCard1Top,
  cargoExpressCard1Right,
  cargoExpressCard1Bottom,
  cargoExpressCard1Left,
  onTransLogisticsCardClick,
}) => {
  const { setSelectedProduct } = useProductContext();

  const onCargoCardClick = () => {
    setSelectedProduct({
      name: "Cargo Express",
      imageSrc: "/rectangle-1311@2x.png",
    });
    onTransLogisticsCardClick();
  };

  const cargoExpressCard1Style = useMemo(() => {
    return {
      position: cargoExpressCard1Position,
      width: cargoExpressCard1Width,
      height: cargoExpressCard1Height,
      top: cargoExpressCard1Top,
      right: cargoExpressCard1Right,
      bottom: cargoExpressCard1Bottom,
      left: cargoExpressCard1Left,
    };
  }, [
    cargoExpressCard1Position,
    cargoExpressCard1Width,
    cargoExpressCard1Height,
    cargoExpressCard1Top,
    cargoExpressCard1Right,
    cargoExpressCard1Bottom,
    cargoExpressCard1Left,
  ]);

  return (
    <button
      className={styles.cargoExpressCard1}
      style={cargoExpressCard1Style}
      onClick={onCargoCardClick}
    >
      <img
        className={styles.cargoExpressCard1Child}
        alt=""
        src="/rectangle-1311@2x.png"
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

export default CargoExpressCard1;
