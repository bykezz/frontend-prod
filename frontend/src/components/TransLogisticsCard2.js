import { useMemo } from "react";
import styles from "./TransLogisticsCard2.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const TransLogisticsCard2 = ({
  transLogisticsCard2Position,
  transLogisticsCard2Width,
  transLogisticsCard2Height,
  transLogisticsCard2Top,
  transLogisticsCard2Right,
  transLogisticsCard2Bottom,
  transLogisticsCard2Left,
  onTransLogisticsCardClick,
}) => {
  const { setSelectedProduct } = useProductContext();

  const onTransClick = () => {
    setSelectedProduct({
      name: "Trans Logistics Ltd..",
      imageSrc: "/rectangle-132@2x.png",
    });
    onTransLogisticsCardClick();
  };

  const transLogisticsCard2Style = useMemo(() => {
    return {
      position: transLogisticsCard2Position,
      width: transLogisticsCard2Width,
      height: transLogisticsCard2Height,
      top: transLogisticsCard2Top,
      right: transLogisticsCard2Right,
      bottom: transLogisticsCard2Bottom,
      left: transLogisticsCard2Left,
    };
  }, [
    transLogisticsCard2Position,
    transLogisticsCard2Width,
    transLogisticsCard2Height,
    transLogisticsCard2Top,
    transLogisticsCard2Right,
    transLogisticsCard2Bottom,
    transLogisticsCard2Left,
  ]);

  return (
    <button
      className={styles.transLogisticsCard2}
      onClick={onTransClick}
      style={transLogisticsCard2Style}
    >
      <img
        className={styles.transLogisticsCard2Child}
        alt=""
        src="/rectangle-132@2x.png"
      />
      <div className={styles.transLogisticsLtdParent}>
        <div className={styles.transLogisticsLtd}>Trans Logistics Ltd.</div>
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

export default TransLogisticsCard2;
