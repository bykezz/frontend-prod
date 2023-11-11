import { useMemo } from "react";
import styles from "./RollingLoudCard3.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const RollingLoudCard3 = ({
  rollingLoudCard3Position,
  rollingLoudCard3Width,
  rollingLoudCard3Height,
  rollingLoudCard3Top,
  rollingLoudCard3Right,
  rollingLoudCard3Bottom,
  rollingLoudCard3Left,
  onTransLogisticsCardClick,
}) => {
  const { setSelectedProduct } = useProductContext();

  const onRollingLoudCardClick = () => {
    setSelectedProduct({
      name: "Rolling Loud Ltd.",
      imageSrc: "/rectangle-131@2x.png",
    });
    onTransLogisticsCardClick();
  };

  const rollingLoudCard3Style = useMemo(() => {
    return {
      position: rollingLoudCard3Position,
      width: rollingLoudCard3Width,
      height: rollingLoudCard3Height,
      top: rollingLoudCard3Top,
      right: rollingLoudCard3Right,
      bottom: rollingLoudCard3Bottom,
      left: rollingLoudCard3Left,
    };
  }, [
    rollingLoudCard3Position,
    rollingLoudCard3Width,
    rollingLoudCard3Height,
    rollingLoudCard3Top,
    rollingLoudCard3Right,
    rollingLoudCard3Bottom,
    rollingLoudCard3Left,
  ]);

  return (
    <button
      className={styles.rollingLoudCard3}
      style={rollingLoudCard3Style}
      onClick={onRollingLoudCardClick}
    >
      <img
        className={styles.rollingLoudCard3Child}
        alt=""
        src="/rectangle-131@2x.png"
      />
      <div className={styles.rollingLoudLtdParent}>
        <div className={styles.rollingLoudLtd}>Rolling Loud Ltd.</div>
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

export default RollingLoudCard3;
