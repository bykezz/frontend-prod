import { useState, useCallback } from "react";
import EmailVerificationMessage from "./EmailVerificationMessage";
import PortalPopup from "./PortalPopup";
import styles from "./RegisterAsALogisticsCompany.module.css";
const RegisterAsALogisticsCompany = ({ onClose }) => {
  const [isEmailVerificationMessageOpen, setEmailVerificationMessageOpen] =
    useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    address: "",
    state: "",
    confirmPassword: "",
    vehicleTypes: "",
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
      <div className={styles.registerAsALogisticsCompan}>
        <div className={styles.registerAsALogisticsCompanChild} />
        <button className={styles.back} onClick={onClose}>
          Back
        </button>
        <div className={styles.registerAsA}>
          Register as a Logistics Company
        </div>
        <div className={styles.companyNameWrapper}>
          <div className={styles.companyName}>Company Name</div>
        </div>
        <div className={styles.emailWrapper}>
          <div className={styles.companyName}>Email</div>
        </div>
        <div className={styles.password}>Password</div>
        <div className={styles.address}>Address</div>
        <div className={styles.state}>State</div>
        <div className={styles.typeOfVehicle}>Type of Vehicle(s)</div>
        <input
          className={styles.registerAsALogisticsCompanItem}
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsALogisticsCompanInner}
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
          className={styles.registerAsALogisticsCompanChild1}
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsALogisticsCompanChild2}
          multiple
          name="vehicleTypes"
          value={formData.vehicleTypes}
          onChange={handleInputChange}
        />

        <input
          className={styles.registerAsALogisticsCompanChild3}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className={styles.confirmPassword}>Confirm Password</div>
        <input
          className={styles.registerAsALogisticsCompanChild4}
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

export default RegisterAsALogisticsCompany;
