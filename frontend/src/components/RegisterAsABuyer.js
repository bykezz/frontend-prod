import { useState, useCallback } from "react";
import EmailVerificationMessage from "./EmailVerificationMessage";
import PortalPopup from "./PortalPopup";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import styles from "./RegisterAsABuyer.module.css";

const RegisterAsABuyer = ({ onClose }) => {
  const { selectedOption } = useAuth();
  const [isEmailVerificationMessageOpen, setEmailVerificationMessageOpen] =
    useState(false);
  const [formData, setFormData] = useState({
    email: "",
    user_type: selectedOption,
    first_name: "",
    last_name: "",
    phone_number: "",
    password: "",
    re_password: "",
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
    event.preventDefault(); // Ensure the event object is properly passed
    console.log("Form Data:", formData);
    console.log("userType:", selectedOption);

    if (selectedOption) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/auth/users/", {
          ...formData,
        });

        if (response.status === 201) {
          // Handle success if needed
          console.log("data:", response.data);
          openEmailVerificationMessage();
        } else {
          // Handle errors
          console.error(
            "Failed to register. Server returned:",
            response.status,
            response.data
          );
        }
      } catch (error) {
        // Handle network errors and other errors
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <div className={styles.registerAsABuyer}>
        <div className={styles.registerAsABuyerChild} />
        <button className={styles.back} onClick={onClose}>
          Back
        </button>
        <div className={styles.registerAsA}>
          {selectedOption} Registration Form
        </div>

        <div className={styles.emailWrapper}>
          <div className={styles.username}>Email</div>
        </div>
        <div className={styles.password}>Password</div>
        <div className={styles.phone}>Phone number</div>
        <div className={styles.firstName}>First Name</div>
        <div className={styles.lastName}>Last Name</div>

        <input
          className={styles.registerAsABuyerInner}
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          className={styles.rectangleInput}
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsABuyerChild1}
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsABuyerChild5}
          type="number"
          required
          name="phone_number"
          value={formData.phone_number}
          onChange={handleInputChange}
        />
        <input
          className={styles.registerAsABuyerChild2}
          type="password"
          required
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className={styles.confirmPassword}>Confirm password</div>
        <input
          className={styles.registerAsABuyerChild3}
          type="password"
          required
          name="re_password"
          value={formData.re_password}
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

export default RegisterAsABuyer;
