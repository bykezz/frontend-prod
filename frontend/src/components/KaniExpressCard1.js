import { useMemo } from "react";
import styles from "./KaniExpressCard1.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const KaniExpressCard1 = ({
  kaniExpressCard1Position,
  kaniExpressCard1Width,
  kaniExpressCard1Height,
  kaniExpressCard1Top,
  kaniExpressCard1Right,
  kaniExpressCard1Bottom,
  kaniExpressCard1Left,
  onTransLogisticsCardClick,
}) => {
  const { setSelectedProduct } = useProductContext();
  const onKaniCardClick = () => {
    setSelectedProduct({
      name: "Kani Express",
      imageSrc: "/rectangle-130@2x.png",
    });
    onTransLogisticsCardClick();
  };

  const kaniExpressCard1Style = useMemo(() => {
    return {
      position: kaniExpressCard1Position,
      width: kaniExpressCard1Width,
      height: kaniExpressCard1Height,
      top: kaniExpressCard1Top,
      right: kaniExpressCard1Right,
      bottom: kaniExpressCard1Bottom,
      left: kaniExpressCard1Left,
    };
  }, [
    kaniExpressCard1Position,
    kaniExpressCard1Width,
    kaniExpressCard1Height,
    kaniExpressCard1Top,
    kaniExpressCard1Right,
    kaniExpressCard1Bottom,
    kaniExpressCard1Left,
  ]);

  return (
    <button
      className={styles.kaniExpressCard1}
      style={kaniExpressCard1Style}
      onClick={onKaniCardClick}
    >
      <img
        className={styles.kaniExpressCard1Child}
        alt=""
        src="/rectangle-130@2x.png"
      />
      <div className={styles.kaniExpressParent}>
        <div className={styles.kaniExpress}>Kani Express</div>
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

export default KaniExpressCard1;
