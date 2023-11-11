import styles from "./SortBy1.module.css";
import { useSearch } from "../context/SearchContext";

const SortBy1 = ({ onClose }) => {
  const { setChoice1 } = useSearch();

  return (
    <div className={styles.sortBy}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <button
          className={styles.popular}
          onClick={() => {
            setChoice1("Popularity");
            onClose();
          }}
        >
          Popularity
        </button>
        <button
          className={styles.price}
          onClick={() => {
            setChoice1("Price");
            onClose();
          }}
        >
          Price
        </button>
        <button
          className={styles.rating}
          onClick={() => {
            setChoice1("Rating");
            onClose();
          }}
        >
          Rating
        </button>
        <button
          className={styles.newest}
          onClick={() => {
            setChoice1("Newest");
            onClose();
          }}
        >
          Newest
        </button>
        <button
          className={styles.oldest}
          onClick={() => {
            setChoice1("Oldest");
            onClose();
          }}
        >
          Oldest
        </button>
      </div>
    </div>
  );
};

export default SortBy1;
