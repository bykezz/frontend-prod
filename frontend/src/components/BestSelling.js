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
        <button className={styles.rectangleParent}>
          <GoatCard />
        </button>
        <button className={styles.rectangleGroup}>
          <LettuceCard />
        </button>
        <button className={styles.rectangleContainer}>
          <GoatCard />
        </button>
        <button className={styles.groupButton}>
          <GoatCard />
        </button>
        <div className={styles.rectangleParent1}>
          <TurkeyCard />
        </div>
        <div className={styles.rectangleParent2}>
          <CarrotCard />
        </div>
        <div className={styles.rectangleParent3}>
          <OnionCard />
        </div>
        <div className={styles.rectangleParent4}>
          <RedPepperCard />
        </div>
        <div className={styles.rectangleParent5}>
          <SpinachCard />
          <div className={styles.groupDiv}>
            <div className={styles.groupChild13} />
            <div className={styles.off}>20% Off</div>
          </div>
        </div>
        <button className={styles.frameButton} onClick={handleSeeMore}>
          <div className={styles.frameChild} />
          <div className={styles.seeMoreParent}>
            <div className={styles.seeMore}>See More</div>
            <img
              className={styles.teenyiconsarrowUpOutline}
              alt=""
              src="/teenyiconsarrowupoutline.svg"
            />
          </div>
        </button>
        <div className={styles.rectangleParent6}>
          <TomatoCard />
        </div>
        <div className={styles.rectangleParent7}>
          <CowCard />
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
        <div className={styles.rectangleParent8}>
          <div className={styles.groupChild13} />
          <div className={styles.off1}>20% Off</div>
        </div>
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
