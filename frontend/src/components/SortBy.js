import styles from "./SortBy.module.css";
import { useSearch } from "../context/SearchContext";

const SortBy = ({ onClose }) => {
  const { setChoice } = useSearch();

  return (
    <div className={styles.sortBy}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <button
          className={styles.popular}
          onClick={() => {
            setChoice("Popularity");
            onClose();
          }}
        >
          Popularity
        </button>
        <button
          className={styles.price}
          onClick={() => {
            setChoice("Price");
            onClose();
          }}
        >
          Price
        </button>
        <button
          className={styles.rating}
          onClick={() => {
            setChoice("Rating");
            onClose();
          }}
        >
          Rating
        </button>
        <button
          className={styles.newest}
          onClick={() => {
            setChoice("Newest");
            onClose();
          }}
        >
          Newest
        </button>
        <button
          className={styles.oldest}
          onClick={() => {
            setChoice("Oldest");
            onClose();
          }}
        >
          Oldest
        </button>
      </div>
    </div>
  );
};

export default SortBy;
