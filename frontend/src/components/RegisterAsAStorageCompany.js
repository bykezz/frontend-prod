import { useState, useCallback } from "react";
import EmailVerificationMessage from "./EmailVerificationMessage";
import PortalPopup from "./PortalPopup";
import styles from "./RegisterAsAStorageCompany.module.css";
const RegisterAsAStorageCompany = ({ onClose }) => {
  const [isEmailVerificationMessageOpen, setEmailVerificationMessageOpen] =
    useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    address: "",
    state: "",
    confirmPassword: "",
    facilityTypes: "",
  });

  const openEmailVerificationMessage = useCallback(() => {
    setEmailVerificationMessageOpen(true);
  }, []);

  const closeEmailVerificationMessage = useCallback(() => {
    setEmailVerificationMessageOpen(false);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);

    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    // Send form data to the backend
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log("Registration successful!");
        openEmailVerificationMessage();
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <div className={styles.registerAsAStorageCompany}>
        <div className={styles.registerAsAStorageCompanyChild} />
        <button className={styles.back} onClick={onClose}>
          Back
        </button>
        <div className={styles.registerAsA}>Register as a Storage Company</div>
        <div className={styles.companyNameWrapper}>
          <div className={styles.companyName}>Company Name</div>
        </div>
        <div className={styles.emailWrapper}>
          <div className={styles.companyName}>Email</div>
        </div>
        <div className={styles.password}>Password</div>
        <div className={styles.address}>Address</div>
        <div className={styles.state}>State</div>
        <div className={styles.typeOfVehicle}>Type of Facility(s)</div>
        <input
          className={styles.registerAsAStorageCompanyItem}
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsAStorageCompanyInner}
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          className={styles.rectangleInput}
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsAStorageCompanyChild1}
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsAStorageCompanyChild2}
          type="text"
          name="facilityTypes"
          value={formData.facilityTypes}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsAStorageCompanyChild3}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className={styles.confirmPassword}>Confirm Password</div>
        <input
          className={styles.registerAsAStorageCompanyChild4}
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <button className={styles.rectangleParent} onClick={handleSubmit}>
          <div className={styles.groupChild} />
          <div className={styles.register}>Register</div>
        </button>
      </div>
      {isEmailVerificationMessageOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <EmailVerificationMessage onClose={closeEmailVerificationMessage} />
        </PortalPopup>
      )}
    </>
  );
};

export default RegisterAsAStorageCompany;
