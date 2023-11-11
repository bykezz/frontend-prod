import { useMemo } from "react";
import styles from "./TransLogisticsCard3.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const TransLogisticsCard3 = ({
  transLogisticsCard3Position,
  transLogisticsCard3Width,
  transLogisticsCard3Height,
  transLogisticsCard3Top,
  transLogisticsCard3Right,
  transLogisticsCard3Bottom,
  transLogisticsCard3Left,
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

  const transLogisticsCard3Style = useMemo(() => {
    return {
      position: transLogisticsCard3Position,
      width: transLogisticsCard3Width,
      height: transLogisticsCard3Height,
      top: transLogisticsCard3Top,
      right: transLogisticsCard3Right,
      bottom: transLogisticsCard3Bottom,
      left: transLogisticsCard3Left,
    };
  }, [
    transLogisticsCard3Position,
    transLogisticsCard3Width,
    transLogisticsCard3Height,
    transLogisticsCard3Top,
    transLogisticsCard3Right,
    transLogisticsCard3Bottom,
    transLogisticsCard3Left,
  ]);

  return (
    <button
      className={styles.transLogisticsCard3}
      onClick={onTransClick}
      style={transLogisticsCard3Style}
    >
      <img
        className={styles.transLogisticsCard3Child}
        alt=""
        src="/rectangle-132@2x.png"
      />
      <div className={styles.transLogisticsLtdParent}>
        <div className={styles.transLogisticsLtd}>Trans Logistics Ltd.</div>
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

export default TransLogisticsCard3;
