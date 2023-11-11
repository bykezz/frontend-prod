import { useMemo } from "react";
import styles from "./NextPageBar.module.css";
const NextPageBar = ({ frameButtonTop }) => {
  const nextPageBarStyle = useMemo(() => {
    return {
      top: frameButtonTop,
    };
  }, [frameButtonTop]);

  return (
    <div className={styles.nextPageBar} style={nextPageBarStyle}>
      <button className={styles.button}>1</button>
      <button className={styles.button1}>2</button>
      <button className={styles.button2}>3</button>
      <button className={styles.button3}>4</button>
      <button className={styles.button4}>5</button>
      <button className={styles.button5}>6</button>
      <button className={styles.nextPageBarInner}>
        <img className={styles.frameChild} alt="" src="/frame-209.svg" />
      </button>
      <button className={styles.nextPageBarChild}>
        <img className={styles.frameChild} alt="" src="/frame-213.svg" />
      </button>
    </div>
  );
};

export default NextPageBar;
