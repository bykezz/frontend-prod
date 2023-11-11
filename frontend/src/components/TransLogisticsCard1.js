import { useMemo } from "react";
import styles from "./TransLogisticsCard1.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const TransLogisticsCard1 = ({
  transLogisticsCard1Position,
  transLogisticsCard1Width,
  transLogisticsCard1Height,
  transLogisticsCard1Top,
  transLogisticsCard1Right,
  transLogisticsCard1Bottom,
  transLogisticsCard1Left,
  onTransLogisticsCardClick,
}) => {
  const { setSelectedProduct } = useProductContext();

  const onTransClick = () => {
    setSelectedProduct({
      name: "Trans Logistics Ltd..",
      imageSrc: "/rectangle-1312@2x.png",
    });
    onTransLogisticsCardClick();
  };

  const transLogisticsCard1Style = useMemo(() => {
    return {
      position: transLogisticsCard1Position,
      width: transLogisticsCard1Width,
      height: transLogisticsCard1Height,
      top: transLogisticsCard1Top,
      right: transLogisticsCard1Right,
      bottom: transLogisticsCard1Bottom,
      left: transLogisticsCard1Left,
    };
  }, [
    transLogisticsCard1Position,
    transLogisticsCard1Width,
    transLogisticsCard1Height,
    transLogisticsCard1Top,
    transLogisticsCard1Right,
    transLogisticsCard1Bottom,
    transLogisticsCard1Left,
  ]);

  return (
    <button
      className={styles.transLogisticsCard1}
      onClick={onTransClick}
      style={transLogisticsCard1Style}
    >
      <img
        className={styles.transLogisticsCard1Child}
        alt=""
        src="/rectangle-1312@2x.png"
      />
      <div className={styles.transLogisticsLtdParent}>
        <div className={styles.transLogisticsLtd}>Trans Logistics Ltd.</div>
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

export default TransLogisticsCard1;
