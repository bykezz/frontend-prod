import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SortByMarketplace.module.css";
const SortByMarketplace = ({ onClose }) => {
  const navigate = useNavigate();

  const onPopularClick = useCallback(() => {
    navigate("/marketplace-1");
  }, [navigate]);

  return (
    <div className={styles.sortByMarketplace}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <button
          className={styles.popularity}
          onClick={onPopularClick}
        >{`Popular `}</button>
        <button className={styles.price}>{`Price `}</button>
        <button className={styles.rating}>Rating</button>
        <button className={styles.newest}>Newest</button>
        <button className={styles.oldest}>Oldest</button>
      </div>
    </div>
  );
};

export default SortByMarketplace;
