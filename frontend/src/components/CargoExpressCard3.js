import { useMemo } from "react";
import styles from "./CargoExpressCard3.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const CargoExpressCard3 = ({
  cargoExpressCard3Position,
  cargoExpressCard3Width,
  cargoExpressCard3Height,
  cargoExpressCard3Top,
  cargoExpressCard3Right,
  cargoExpressCard3Bottom,
  cargoExpressCard3Left,
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

  const cargoExpressCard3Style = useMemo(() => {
    return {
      position: cargoExpressCard3Position,
      width: cargoExpressCard3Width,
      height: cargoExpressCard3Height,
      top: cargoExpressCard3Top,
      right: cargoExpressCard3Right,
      bottom: cargoExpressCard3Bottom,
      left: cargoExpressCard3Left,
    };
  }, [
    cargoExpressCard3Position,
    cargoExpressCard3Width,
    cargoExpressCard3Height,
    cargoExpressCard3Top,
    cargoExpressCard3Right,
    cargoExpressCard3Bottom,
    cargoExpressCard3Left,
  ]);

  return (
    <button
      className={styles.cargoExpressCard3}
      style={cargoExpressCard3Style}
      onClick={onCargoCardClick}
    >
      <img
        className={styles.cargoExpressCard3Child}
        alt=""
        src="/rectangle-1311@2x.png"
      />
      <div className={styles.cargoExpressParent}>
        <div className={styles.cargoExpress}>Cargo Express</div>
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

export default CargoExpressCard3;
