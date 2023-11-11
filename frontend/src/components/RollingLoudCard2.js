import { useMemo } from "react";
import styles from "./RollingLoudCard2.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const RollingLoudCard2 = ({
  rollingLoudCard2Position,
  rollingLoudCard2Width,
  rollingLoudCard2Height,
  rollingLoudCard2Top,
  rollingLoudCard2Right,
  rollingLoudCard2Bottom,
  rollingLoudCard2Left,
  onTransLogisticsCardClick,
}) => {
  const { setSelectedProduct } = useProductContext();

  const onRollingLoudCardClick = () => {
    setSelectedProduct({
      name: "Rolling Loud Ltd.",
      imageSrc: "/rectangle-130@2x.png",
    });
    onTransLogisticsCardClick();
  };

  const rollingLoudCard2Style = useMemo(() => {
    return {
      position: rollingLoudCard2Position,
      width: rollingLoudCard2Width,
      height: rollingLoudCard2Height,
      top: rollingLoudCard2Top,
      right: rollingLoudCard2Right,
      bottom: rollingLoudCard2Bottom,
      left: rollingLoudCard2Left,
    };
  }, [
    rollingLoudCard2Position,
    rollingLoudCard2Width,
    rollingLoudCard2Height,
    rollingLoudCard2Top,
    rollingLoudCard2Right,
    rollingLoudCard2Bottom,
    rollingLoudCard2Left,
  ]);

  return (
    <button
      className={styles.rollingLoudCard2}
      style={rollingLoudCard2Style}
      onClick={onRollingLoudCardClick}
    >
      <img
        className={styles.rollingLoudCard2Child}
        alt=""
        src="/rectangle-130@2x.png"
      />
      <div className={styles.rollingLoudLtdParent}>
        <div className={styles.rollingLoudLtd}>Rolling Loud Ltd.</div>
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

export default RollingLoudCard2;
