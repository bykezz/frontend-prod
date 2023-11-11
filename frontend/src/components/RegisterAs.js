import { useState, useCallback } from "react";
import RegisterAsAFarmer from "./RegisterAsAFarmer";
import RegisterAsABuyer from "./RegisterAsABuyer";
import RegisterAsALogisticCompany from "./RegisterAsALogisticCompany";
import RegisterAsAStorageCompany from "./RegisterAsAStorageCompany";
import PortalPopup from "./PortalPopup";
import styles from "./RegisterAs.module.css";
import { useAuth } from "../context/AuthContext";

const RegisterAs = ({ onClose }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { selectedOption, setSelectedOption } = useAuth();
  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);
  const resetPopup = useCallback(() => {
    setPopupOpen(false);
  });

  const closePopup = useCallback(() => {
    setPopupOpen(false);
    setSelectedOption(null);
  }, []);

  return (
    <>
      <div className={styles.registerAs}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <button
            className={styles.next}
            name="reg-button"
            type="submit"
            onClick={openPopup}
          >
            Next
          </button>
          <div className={styles.registerAsA}>Register as a:</div>
          <div className={styles.farmerParent}>
            <div className={styles.farmer}>Farmer</div>
            <input
              className={styles.groupItem}
              type="radio"
              name="reg-button"
              value="farmer"
              checked={selectedOption === "Farmer"}
              onChange={() => {
                setSelectedOption("Farmer");
                resetPopup();
              }}
            />
          </div>
          <div className={styles.buyerParent}>
            <div className={styles.farmer}>Customer</div>
            <input
              className={styles.groupInner}
              type="radio"
              name="reg-button"
              value="buyer"
              checked={selectedOption === "Customer"}
              onChange={() => {
                setSelectedOption("Customer");
                resetPopup();
              }}
            />
          </div>
          <div className={styles.logisticsCompanyParent}>
            <div className={styles.farmer}>Logistics company</div>
            <input
              className={styles.groupInner}
              type="radio"
              name="reg-button"
              value="logistics"
              checked={selectedOption === "Logistics"}
              onChange={() => {
                setSelectedOption("Logistics");
                resetPopup();
              }}
            />
          </div>
          <div className={styles.storageFacilityParent}>
            <div className={styles.farmer}>Storage Facility</div>
            <input
              className={styles.groupItem}
              type="radio"
              name="reg-button"
              value="storage"
              checked={selectedOption === "Storage"}
              onChange={() => {
                setSelectedOption("Storage");
                resetPopup();
              }}
            />
          </div>
        </div>
      </div>
      {/* {isPopupOpen && selectedOption === "Farmer" && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <RegisterAsAFarmer onClose={closePopup} />
        </PortalPopup>
      )} */}
      {isPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <RegisterAsABuyer onClose={closePopup} />
        </PortalPopup>
      )}
      {/* 
      {isPopupOpen && selectedOption === "Logistics" && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <RegisterAsALogisticCompany onClose={closePopup} />
        </PortalPopup>
      )}

      {isPopupOpen && selectedOption === "Storage" && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <RegisterAsAStorageCompany onClose={closePopup} />
        </PortalPopup>
      )} */}
    </>
  );
};

export default RegisterAs;
