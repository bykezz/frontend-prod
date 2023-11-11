import { useMemo } from "react";
import styles from "./RollingLoudCard1.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const RollingLoudCard1 = ({
  rollingLoudCard1Position,
  rollingLoudCard1Width,
  rollingLoudCard1Height,
  rollingLoudCard1Top,
  rollingLoudCard1Right,
  rollingLoudCard1Bottom,
  rollingLoudCard1Left,
  onTransLogisticsCardClick,
}) => {
  const { setSelectedProduct } = useProductContext();

  const rollingLoudCard1Style = useMemo(() => {
    return {
      position: rollingLoudCard1Position,
      width: rollingLoudCard1Width,
      height: rollingLoudCard1Height,
      top: rollingLoudCard1Top,
      right: rollingLoudCard1Right,
      bottom: rollingLoudCard1Bottom,
      left: rollingLoudCard1Left,
    };
  }, [
    rollingLoudCard1Position,
    rollingLoudCard1Width,
    rollingLoudCard1Height,
    rollingLoudCard1Top,
    rollingLoudCard1Right,
    rollingLoudCard1Bottom,
    rollingLoudCard1Left,
  ]);
  const onRollingLoudCardClick = () => {
    setSelectedProduct({
      name: "Rolling Loud Ltd.",
      imageSrc: "/rectangle-131@2x.png",
    });
    onTransLogisticsCardClick();
  };

  return (
    <button
      className={styles.rollingLoudCard1}
      style={rollingLoudCard1Style}
      onClick={onRollingLoudCardClick}
    >
      <img
        className={styles.rollingLoudCard1Child}
        alt=""
        src="/rectangle-131@2x.png"
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

export default RollingLoudCard1;
