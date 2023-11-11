import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import StorageNavigation from "../components/StorageNavigation";
import styles from "./StorageDetail.module.css";
import { useStorageContext } from "../context/StorageProductContext";

const StorageDetail = () => {
  const { selectedStorage } = useStorageContext();
  return (
    <div className={styles.kaniStorage}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <button className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.requestAFacility}>Request a Facility</div>
        </button>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.groupItem}
            alt=""
            src={selectedStorage.imageSrc}
          />
          <div className={styles.kaniStorageHouse}>{selectedStorage.name}</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupInner} />
          <div className={styles.storageTypesAvailableParent}>
            <div className={styles.storageTypesAvailable}>
              Storage Types Available
            </div>
            <div className={styles.silos}>Silos</div>
            <div className={styles.barns}>Barns</div>
            <div className={styles.coldStorage}>Cold storage</div>
          </div>
          <div className={styles.noOfCustomers}>No. of customers</div>
          <div className={styles.div}>32</div>
          <div className={styles.rating}>Rating</div>
          <div className={styles.div1}>4.5</div>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
        </div>
        <footer className={styles.footer} id="footer">
          <Footer />
        </footer>
      </div>
      <SearchBar
        dimensionText="/phuserlight5.svg"
        dimensionText2="/bibasketfill1.svg"
        propRight="5.41%"
      />
      <StorageNavigation />
    </div>
  );
};

export default StorageDetail;
