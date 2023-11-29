import { useState, useRef, useCallback, useEffect } from "react";
import "antd/dist/antd.min.css";
import { useSearch } from "../context/SearchContext";
import Footer from "../components/Footer";
import axios from "axios";
import MarketplaceCategories from "../components/MarketplaceCategories";
import SortBy from "../components/SortBy";
import PortalPopup from "../components/PortalPopup";
import SearchBar from "../components/SearchBar";
import AddToCart from "../components/AddToCart";
import FarmersDealsNavigation from "../components/FarmersDealsNavigation";
import styles from "./FarmersDeals.module.css";
import FarmersDealProductDescripti from "../components/FarmersDealProductDescripti";
import FdProductCard from "../components/FdProductCard";
import Column from "antd/lib/table/Column";

const FarmersDeals = () => {
  const groupButtonRef = useRef(null);

  const [isSortByMarketplaceOpen, setSortByMarketplaceOpen] = useState(false);
  const [isFrameOpen, setFrameOpen] = useState(false);
  const { products, setProducts, choice, setChoice } = useSearch();

  const [isAddToCartOpen, setAddToCartOpen] = useState(false);

  const openSortByMarketplace = useCallback(() => {
    setSortByMarketplaceOpen(true);
  }, []);

  const closeSortByMarketplace = useCallback(() => {
    setSortByMarketplaceOpen(false);
  }, []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openAddToCart = useCallback(() => {
    setAddToCartOpen(true);
  }, []);

  const closeAddToCart = useCallback(() => {
    setAddToCartOpen(false);
  }, []);

  useEffect(() => {
    setChoice("Popularity");
    axios
      .get("http://127.0.0.1:8000/product/")
      .then((response) => {
        setProducts(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className={styles.farmersDeals}>
        <div className={styles.fixed}>
          <MarketplaceCategories />
          <SearchBar
            dimensionText="/phuserlight3.svg"
            dimensionText2="/bibasketfill2.svg"
            propRight="5.4%"
          />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />

          <button
            className={styles.sortByPopularParent}
            ref={groupButtonRef}
            onClick={openSortByMarketplace}
          >
            <div className={styles.sortByPopular}>
              <span className={styles.sortBy}>Sort By</span>
              <span className={styles.popular}> {choice}</span>
            </div>
            <img
              className={styles.riarrowUpSLineIcon}
              alt=""
              src="/riarrowupsline2.svg"
            />
          </button>

          <div className={styles.allProducts}>
            <span className={styles.all}>All</span>
            <span className={styles.products}> Products</span>
          </div>

          <div
            className={styles.ProductList}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              width: "78%",
              height: "auto",
            }}
          >
            {products.map((product) => (
              <FdProductCard
                key={product.id}
                product={product}
                productImage={product.images[0].image}
              />
            ))}
          </div>
          <footer className={styles.footer} id="footer">
            <Footer />
          </footer>
        </div>

        <FarmersDealsNavigation />
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
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FarmersDealProductDescripti onClose={closeFrame} />
        </PortalPopup>
      )}

      {isAddToCartOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeAddToCart}
        >
          <AddToCart onClose={closeAddToCart} />
        </PortalPopup>
      )}
    </>
  );
};

export default FarmersDeals;
