import styles from "./SortBy2.module.css";
import { useSearch } from "../context/SearchContext";

const SortBy = ({ onClose }) => {
  const { setChoice2 } = useSearch();

  return (
    <div className={styles.sortBy}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <button
          className={styles.popular}
          onClick={() => {
            setChoice2("Popularity");
            onClose();
          }}
        >
          Popularity
        </button>
        <button
          className={styles.price}
          onClick={() => {
            setChoice2("Price");
            onClose();
          }}
        >
          Price
        </button>
        <button
          className={styles.rating}
          onClick={() => {
            setChoice2("Rating");
            onClose();
          }}
        >
          Rating
        </button>
        <button
          className={styles.newest}
          onClick={() => {
            setChoice2("Newest");
            onClose();
          }}
        >
          Newest
        </button>
        <button
          className={styles.oldest}
          onClick={() => {
            setChoice2("Oldest");
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
