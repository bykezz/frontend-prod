import { useState, useRef, useCallback } from "react";
import FilterByTypeForLogistics from "./FilterByTypeForLogistics";
import PortalPopup from "./PortalPopup";
import FilterBySizeLogistics from "./FilterBySizeLogistics";
import styles from "./LogisticsFilter.module.css";
import { useSearch } from "../context/SearchContext";

const LogisticsFilter = () => {
  const groupButton1Ref = useRef(null);
  const { logisticsType, logisticsSize } = useSearch();
  const [isFilterByTypeForLogisticsOpen, setFilterByTypeForLogisticsOpen] =
    useState(false);
  const frameButton5Ref = useRef(null);
  const [isFilterBySizeLogisticsOpen, setFilterBySizeLogisticsOpen] =
    useState(false);

  const openFilterByTypeForLogistics = useCallback(() => {
    setFilterByTypeForLogisticsOpen(true);
  }, []);

  const closeFilterByTypeForLogistics = useCallback(() => {
    setFilterByTypeForLogisticsOpen(false);
  }, []);

  const openFilterBySizeLogistics = useCallback(() => {
    setFilterBySizeLogisticsOpen(true);
  }, []);

  const closeFilterBySizeLogistics = useCallback(() => {
    setFilterBySizeLogisticsOpen(false);
  }, []);

  return (
    <>
      <div className={styles.logisticsFilter}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.filterWrapper}>
            <div className={styles.filter}>Filter</div>
          </div>
        </button>
        <button
          className={styles.rectangleGroup}
          ref={groupButton1Ref}
          onClick={openFilterByTypeForLogistics}
        >
          <div className={styles.groupChild} />
          <div className={styles.filterByType}>{logisticsType}</div>
          <img className={styles.groupItem} alt="" src="/polygon-7.svg" />
        </button>
        <button
          className={styles.frameParent}
          ref={frameButton5Ref}
          onClick={openFilterBySizeLogistics}
        >
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.filterBySizeWrapper}>
              <div className={styles.filterBySize}>{logisticsSize}</div>
            </div>
            <img className={styles.frameInner} alt="" src="/frame-240.svg" />
          </div>
        </button>
      </div>
      {isFilterByTypeForLogisticsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          right={-20}
          bottom={10}
          relativeLayerRef={groupButton1Ref}
          onOutsideClick={closeFilterByTypeForLogistics}
        >
          <FilterByTypeForLogistics onClose={closeFilterByTypeForLogistics} />
        </PortalPopup>
      )}
      {isFilterBySizeLogisticsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          right={-20}
          bottom={10}
          relativeLayerRef={frameButton5Ref}
          onOutsideClick={closeFilterBySizeLogistics}
        >
          <FilterBySizeLogistics onClose={closeFilterBySizeLogistics} />
        </PortalPopup>
      )}
    </>
  );
};

export default LogisticsFilter;
