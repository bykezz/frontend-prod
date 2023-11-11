import { useState, useRef, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styles from "./GroupComponent.module.css";
import { useSearch } from "../context/SearchContext";

const GroupComponent = ({ onClose }) => {
  const groupPopupRef = useRef(null);
  const { setStorageType } = useSearch();

  return (
    <>
      <div className={styles.rectangleParent} ref={groupPopupRef}>
        <div className={styles.groupChild} />
        <button
          className={styles.silo}
          onClick={() => {
            setStorageType("Silo");
            onClose();
          }}
        >
          Silo
        </button>
        <button
          className={styles.barns}
          onClick={() => {
            setStorageType("Barns");
            onClose();
          }}
        >{`Barns `}</button>
        <button
          className={styles.coldStorage}
          onClick={() => {
            setStorageType("Cold Storage");
            onClose();
          }}
        >
          Cold Storage
        </button>
        <button
          className={styles.warehouses}
          onClick={() => {
            setStorageType("Warehouse");
            onClose();
          }}
        >
          Warehouse
        </button>
      </div>
    </>
  );
};

export default GroupComponent;
