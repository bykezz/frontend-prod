import { useCallback } from "react";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import LogisticsNavigation from "../components/LogisticsNavigation";
import styles from "./LogisticDetail.module.css";
import { useProductContext } from "../context/LogisticProductContext";

const LogisticDetail = () => {
  const { selectedProduct } = useProductContext();

  return (
    <div className={styles.transLogistic}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <img
            className={styles.groupChild}
            alt=""
            src={selectedProduct.imageSrc}
          />
          <div className={styles.transLogistics}>{selectedProduct.name}</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.availableVehiclesParent}>
            <div className={styles.availableVehicles}>Available Vehicles</div>
            <div className={styles.trailers}>Trailers</div>
            <div className={styles.trucks}>Trucks</div>
            <div className={styles.ferries}>Ferries</div>
          </div>
          <div className={styles.noOfCustomers}>No. of customers</div>
          <div className={styles.div}>32</div>
          <div className={styles.rating}>Rating</div>
          <div className={styles.div1}>4.5</div>
          <div className={styles.groupInner} />
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
        </div>
        <button className={styles.groupButton}>
          <div className={styles.rectangleDiv} />
          <div className={styles.requestLogistics}>Request Logistics</div>
        </button>
        <footer className={styles.footer} id="footer">
          <Footer />
        </footer>
      </div>
      <SearchBar
        dimensionText="/phuserlight1.svg"
        dimensionText2="/bibasketfill1.svg"
        propRight="5.41%"
      />
      <LogisticsNavigation />
    </div>
  );
};

export default LogisticDetail;
