import { useState, useRef, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import SortBy from "./SortBy";
import { useNavigate } from "react-router-dom";
import styles from "./BestSelling.module.css";
import TomatoCard from "./TomatoCard";
import SpinachCard from "./SpinachCard";
import RedPepperCard from "./RedPepperCard";
import OnionCard from "./OnionCard";
import CarrotCard from "./CarrotCard";
import LettuceCard from "./LettuceCard";
import GoatCard from "./GoatCard";
import TurkeyCard from "./TurkeyCard";
import CowCard from "./CowCard";
import { useSearch } from "../context/SearchContext";

const BestSelling = () => {
  const { choice } = useSearch();
  const groupButton11Ref = useRef(null);
  const navigate = useNavigate();
  const [isSortByOpen, setSortByOpen] = useState(false);

  const openSortBy = useCallback(() => {
    setSortByOpen(true);
  }, []);

  const closeSortBy = useCallback(() => {
    setSortByOpen(false);
  }, []);

  const handleSeeMore = () => {
    navigate("/marketplace");
  };

  return (
    <>
      <div className={styles.bestselling}>
        <div className={styles.bestsellingProducts}>
          <span className={styles.bestselling1}>Bestselling</span>
          <span className={styles.products}> Products</span>
        </div>
        <button
          className={styles.sortByPopularParent}
          ref={groupButton11Ref}
          onClick={openSortBy}
        >
          <div className={styles.sortByPopularContainer}>
            <span className={styles.sortBy}>Sort By</span>
            <span className={styles.popular}> {choice}</span>
          </div>
          <img
            className={styles.riarrowUpSLineIcon}
            alt=""
            src="/riarrowupsline3.svg"
          />
        </button>

        <GoatCard />

        <LettuceCard />

        <GoatCard />

        <GoatCard />

        <TurkeyCard />

        <CarrotCard />

        <OnionCard />

        <SpinachCard />

        <RedPepperCard />

        <SpinachCard />

        <TomatoCard />

        <CowCard />
      </div>

      {isSortByOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          relativeLayerRef={groupButton11Ref}
          onOutsideClick={closeSortBy}
        >
          <SortBy onClose={closeSortBy} />
        </PortalPopup>
      )}
    </>
  );
};

export default BestSelling;
