import { useRef, useCallback, useState, useEffect } from "react";
import PortalPopup from "./PortalPopup";
import SortBy from "./SortBy";
import axios from "axios";
import MpProductCard from "./MpProductCard";
import styles from "./AllProducts.module.css";
import { useSearch } from "../context/SearchContext";

const AllProducts = () => {
  const groupButtonRef = useRef(null);

  const { products1, setProducts1, choice, setChoice } = useSearch();

  const [isSortByMarketplaceOpen, setSortByMarketplaceOpen] = useState(false);

  const openSortByMarketplace = useCallback(() => {
    setSortByMarketplaceOpen(true);
  }, []);

  const closeSortByMarketplace = useCallback(() => {
    setSortByMarketplaceOpen(false);
  }, []);
  useEffect(() => {
    setChoice("Popularity");
    axios
      .get("http://13.53.125.166/farmjointitem/")
      .then((response) => {
        setProducts1(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className={styles.allProducts}>
        <div className={styles.allProducts1}>
          <span className={styles.all}>All</span>
          <span className={styles.products}> Products</span>
        </div>
        <button
          className={styles.sortByPopularParent}
          ref={groupButtonRef}
          onClick={openSortByMarketplace}
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
        <div
          className={styles.ProductList}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            width: "100%",
            height: "auto",
          }}
        >
          {products1.map((product) => (
            <MpProductCard
              key={product.id}
              product={product}
              productImage={product.images[0].image}
            />
          ))}
        </div>
      </div>
      {isSortByMarketplaceOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          relativeLayerRef={groupButtonRef}
          onOutsideClick={closeSortByMarketplace}
        >
          <SortBy onClose={closeSortByMarketplace} />
        </PortalPopup>
      )}
    </>
  );
};

export default AllProducts;
