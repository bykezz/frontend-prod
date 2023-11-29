import { useState, useRef, useCallback } from "react";
import SortByMarketplace from "../components/SortByMarketplace";
import PortalPopup from "../components/PortalPopup";
import NextPageBar from "../components/NextPageBar";
import AllProducts from "../components/AllProducts";
import MarketplaceCategories from "../components/MarketplaceCategories";
import MarketplaceNavigation from "../components/MarketplaceNavigation";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styles from "./Marketplace.module.css";
import { list } from "@chakra-ui/react";
const Marketplace = () => {
  return (
    <>
      <div className={styles.marketplace}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />

          <AllProducts />
          <footer className={styles.footer} id="footer">
            <Footer />
          </footer>
        </div>
        <div className={styles.fixed}>
          <SearchBar
            dimensionText="/phuserlight3.svg"
            dimensionText2="/bibasketfill2.svg"
            propRight="5.4%"
          />
          <MarketplaceCategories />
        </div>

        <MarketplaceNavigation />
      </div>
    </>
  );
};

export default Marketplace;
