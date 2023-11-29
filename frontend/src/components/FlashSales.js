import { useRef, useCallback, useState } from "react";
import styles from "./FlashSales.module.css";
import LettuceCard from "./LettuceCard";
import SpinachCard from "./SpinachCard";
import RedPepperCard from "./RedPepperCard";
import OnionCard from "./OnionCard";
import TomatoCard from "./TomatoCard";
import CarrotCard from "./CarrotCard";
import ChickenCard from "./ChickenCard";
import TurkeyCard from "./TurkeyCard";
import CowCard from "./CowCard";
import SortBy1 from "./SortBy1";
import { useSearch } from "../context/SearchContext";
import PortalPopup from "./PortalPopup";

const FlashSales = () => {
  const frameButtonRef = useRef(null);
  const { choice1 } = useSearch();
  const [isSortByOpen, setSortByOpen] = useState(false);

  const openSortBy = useCallback(() => {
    setSortByOpen(true);
  }, []);

  const closeSortBy = useCallback(() => {
    setSortByOpen(false);
  }, []);
  return (
    <>
      <div className={styles.flashsales}>
        <button
          className={styles.sortByPopularParent}
          ref={frameButtonRef}
          onClick={openSortBy}
        >
          <div className={styles.sortByPopularContainer}>
            <span className={styles.sortBy}>Sort By</span>
            <span className={styles.popular}> {choice1}</span>
          </div>
          <img
            className={styles.riarrowUpSLineIcon}
            alt=""
            src="/riarrowupsline2.svg"
          />
        </button>
        <div className={styles.flashSales}>
          <span className={styles.flash}>Flash</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.sales}>Sales</span>
        </div>

        <LettuceCard />

        <TomatoCard />

        <TurkeyCard />

        <RedPepperCard />

        <CowCard />

        <ChickenCard />
      </div>
      {isSortByOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          relativeLayerRef={frameButtonRef}
          onOutsideClick={closeSortBy}
        >
          <SortBy1 onClose={closeSortBy} />
        </PortalPopup>
      )}
    </>
  );
};

export default FlashSales;
