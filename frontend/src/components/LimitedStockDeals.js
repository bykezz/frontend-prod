import { useState, useRef, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import SortBy2 from "./SortBy2";
import styles from "./LimitedStockDeals.module.css";
import RedPepperCard from "./RedPepperCard";
import OnionCard from "./OnionCard";
import CarrotCard from "./CarrotCard";
import TomatoCard from "./TomatoCard";
import SpinachCard from "./SpinachCard";
import LettuceCard from "./LettuceCard";
import GoatCard from "./GoatCard";
import ChickenCard from "./ChickenCard";
import { useSearch } from "../context/SearchContext";

const LimitedStockDeals = () => {
  const frameButton1Ref = useRef(null);
  const { choice2 } = useSearch();
  const [isSortBy1Open, setSortBy1Open] = useState(false);

  const openSortBy1 = useCallback(() => {
    setSortBy1Open(true);
  }, []);

  const closeSortBy1 = useCallback(() => {
    setSortBy1Open(false);
  }, []);

  return (
    <>
      <div className={styles.limitedStockDeals}>
        <div className={styles.limitedStockDealsContainer}>
          <span className={styles.limitedStock}>Limited Stock</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.deals}>Deals</span>
        </div>

        <GoatCard />

        <CarrotCard />

        <ChickenCard />

        <OnionCard />

        <RedPepperCard />

        <SpinachCard />

        <button
          className={styles.sortByPopularParent}
          ref={frameButton1Ref}
          onClick={openSortBy1}
        >
          <div className={styles.sortByPopularContainer}>
            <span className={styles.sortBy}>Sort By</span>
            <span className={styles.popular}> {choice2}</span>
          </div>
          <img
            className={styles.riarrowUpSLineIcon}
            alt=""
            src="/riarrowupsline1.svg"
          />
        </button>
      </div>

      {isSortBy1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          relativeLayerRef={frameButton1Ref}
          onOutsideClick={closeSortBy1}
        >
          <SortBy2 onClose={closeSortBy1} />
        </PortalPopup>
      )}
    </>
  );
};

export default LimitedStockDeals;
