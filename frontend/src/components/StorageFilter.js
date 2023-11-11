import { useState, useRef, useCallback } from "react";
import GroupComponent from "./GroupComponent";
import PortalPopup from "./PortalPopup";
import FilterBySizeStorage from "./FilterBySizeStorage";
import styles from "./StorageFilter.module.css";
import { useSearch } from "../context/SearchContext";

const StorageFilter = () => {
  const groupButtonRef = useRef(null);
  const [isGroupPopupOpen, setGroupPopupOpen] = useState(false);
  const frameButton1Ref = useRef(null);
  const [isFilterBySizeStorageOpen, setFilterBySizeStorageOpen] =
    useState(false);
  const { storageType, storageSize } = useSearch();

  const openGroupPopup = useCallback(() => {
    setGroupPopupOpen(true);
  }, []);

  const closeGroupPopup = useCallback(() => {
    setGroupPopupOpen(false);
  }, []);

  const openFilterBySizeStorage = useCallback(() => {
    setFilterBySizeStorageOpen(true);
  }, []);

  const closeFilterBySizeStorage = useCallback(() => {
    setFilterBySizeStorageOpen(false);
  }, []);

  return (
    <>
      <div className={styles.storageFilter}>
        <button className={styles.frameParent}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.filterWrapper}>
            <div className={styles.filter}>Filter</div>
          </div>
        </button>
        <button
          className={styles.rectangleParent}
          ref={groupButtonRef}
          onClick={openGroupPopup}
        >
          <div className={styles.groupChild} />
          <div className={styles.filterByType}>{storageType}</div>
          <img className={styles.groupItem} alt="" src="/polygon-7.svg" />
        </button>
        <button
          className={styles.frameGroup}
          ref={frameButton1Ref}
          onClick={openFilterBySizeStorage}
        >
          <div className={styles.rectangleContainer}>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.filterBySizeWrapper}>
              <div className={styles.filterBySize}>{storageSize}</div>
            </div>
            <img className={styles.frameInner} alt="" src="/frame-240.svg" />
          </div>
        </button>
      </div>
      {isGroupPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          right={-20}
          bottom={10}
          relativeLayerRef={groupButtonRef}
          onOutsideClick={closeGroupPopup}
        >
          <GroupComponent onClose={closeGroupPopup} />
        </PortalPopup>
      )}
      {isFilterBySizeStorageOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          right={-20}
          bottom={10}
          relativeLayerRef={frameButton1Ref}
          onOutsideClick={closeFilterBySizeStorage}
        >
          <FilterBySizeStorage onClose={closeFilterBySizeStorage} />
        </PortalPopup>
      )}
    </>
  );
};

export default StorageFilter;
