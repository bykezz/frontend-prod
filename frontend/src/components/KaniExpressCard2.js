import { useMemo } from "react";
import styles from "./KaniExpressCard2.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const KaniExpressCard2 = ({
  kaniExpressCard2Position,
  kaniExpressCard2Width,
  kaniExpressCard2Height,
  kaniExpressCard2Top,
  kaniExpressCard2Right,
  kaniExpressCard2Bottom,
  kaniExpressCard2Left,
  onTransLogisticsCardClick,
}) => {
  const { setSelectedProduct } = useProductContext();
  const onKaniCardClick = () => {
    setSelectedProduct({
      name: "Kani Express",
      imageSrc: "/rectangle-1322@2x.png",
    });
    onTransLogisticsCardClick();
  };

  const kaniExpressCard2Style = useMemo(() => {
    return {
      position: kaniExpressCard2Position,
      width: kaniExpressCard2Width,
      height: kaniExpressCard2Height,
      top: kaniExpressCard2Top,
      right: kaniExpressCard2Right,
      bottom: kaniExpressCard2Bottom,
      left: kaniExpressCard2Left,
    };
  }, [
    kaniExpressCard2Position,
    kaniExpressCard2Width,
    kaniExpressCard2Height,
    kaniExpressCard2Top,
    kaniExpressCard2Right,
    kaniExpressCard2Bottom,
    kaniExpressCard2Left,
  ]);

  return (
    <button
      className={styles.kaniExpressCard2}
      style={kaniExpressCard2Style}
      onClick={onKaniCardClick}
    >
      <img
        className={styles.kaniExpressCard2Child}
        alt=""
        src="/rectangle-1322@2x.png"
      />
      <div className={styles.kaniExpressParent}>
        <div className={styles.kaniExpress}>Kani Express</div>
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

export default KaniExpressCard2;
