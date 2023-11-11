import { useState, useCallback } from "react";
import EmailVerificationMessage from "./EmailVerificationMessage";
import PortalPopup from "./PortalPopup";
import styles from "./RegisterAsAFarmer.module.css";
const RegisterAsAFarmer = ({ onClose }) => {
  const [isEmailVerificationMessageOpen, setEmailVerificationMessageOpen] =
    useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    farmName: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
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
      <div className={styles.registerAsAFarmer}>
        <div className={styles.registerAsAFarmerChild} />
        <button className={styles.back} onClick={onClose}>
          Back
        </button>
        <div className={styles.registerAsA}>Register as a Farmer</div>
        <div className={styles.usernameWrapper}>
          <div className={styles.username}>Username</div>
        </div>
        <div className={styles.emailWrapper}>
          <div className={styles.username}>Email</div>
        </div>
        <div className={styles.password}>Password</div>
        <div className={styles.firstName}>First Name</div>
        <div className={styles.lastName}>Last Name</div>
        <div className={styles.storeName}>Farm Name</div>
        <input
          className={styles.registerAsAFarmerItem}
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsAFarmerInner}
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          className={styles.rectangleInput}
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsAFarmerChild1}
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsAFarmerChild2}
          type="text"
          name="farmName"
          value={formData.farmName}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsAFarmerChild3}
          type="password"
          required
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className={styles.confirmPassword}>Confirm Password</div>
        <input
          className={styles.registerAsAFarmerChild4}
          type="password"
          required
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

export default RegisterAsAFarmer;
