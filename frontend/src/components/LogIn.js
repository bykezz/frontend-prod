import { useState, useCallback, useEffect } from "react";
import { Input, Box, Spinner } from "@chakra-ui/react";
import RegisterAs from "./RegisterAs";
import PortalPopup from "./PortalPopup";
import ForgotPassword from "./ForgotPassword";
import Axios from "axios";
import styles from "./LogIn.module.css";
import { useAuth } from "../context/AuthContext";
import { useFarmerProfile } from "../context/FarmerProfileContext";
import { useLogisticsProfile } from "../context/LogisticsProfileContext";
import { useCustomerProfile } from "../context/CustomerProfileContext";
import { useStorageProfile } from "../context/StorageProfileContext";

const LogIn = ({ onClose }) => {
  const {
    handleLoginSuccess,
    userRole,
    setUserRole,
    userName,
    setUserName,
    setUserId,
    userId,
  } = useAuth();
  const {
    setfirst_name,
    setlast_name,
    setEmail,
    setStreet,
    setCity,
    setFarmState,
    setEditedFarmAddress,
    setEditedUsername,
  } = useFarmerProfile();
  const {
    setfirst_name1,
    setlast_name1,
    setEmail1,
    setStreet1,
    setCity1,
    setState1,
    setEditedAddress,
  } = useCustomerProfile();
  const {
    setfirst_name2,
    setlast_name2,
    setEmail2,
    setStreet2,
    setCity2,
    setState2,
  } = useLogisticsProfile();
  const {
    setfirst_name3,
    setlast_name3,
    setEmail3,
    setStreet3,
    setCity3,
    setState3,
  } = useStorageProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(true);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [isRegisterAsPopupOpen, setRegisterAsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const openRegisterAsPopup = useCallback(() => {
    setRegisterAsPopupOpen(true);
  }, []);

  const closeRegisterAsPopup = useCallback(() => {
    setRegisterAsPopupOpen(false);
  }, []);
  const openForgotPassword = useCallback(() => {
    setForgotPasswordOpen(true);
    setLoginOpen(false); // Close the login popup when opening "Forgot Password"
  }, []);

  const closeForgotPassword = useCallback(() => {
    setForgotPasswordOpen(false);
    setLoginOpen(true); // Reopen the login popup when closing "Forgot Password"
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "email") {
      setErrorMessage("");
    } else if (name === "password") {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("Form Data:", formData);

    try {
      const response = await Axios.post(
        "http://13.53.125.166/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Handle success (e.g., show a success message)
        console.log("login successful!");
        console.log(response);
        const token = response.data.access;

        const tokenParts = token.split(".");
        const payload = JSON.parse(atob(tokenParts[1]));
        const user_type = payload.user_type;
        const user_name = payload.name;
        const user_id = payload.user_id;
        setUserName(user_name);
        setUserRole(user_type);
        setUserId(user_id);
        handleLoginSuccess(token, user_type, user_name, user_id);
        console.log("token:", token);
        const api1 = "http://13.53.125.166/auth/users/me/";
        const api3 = "http://13.53.125.166/address/";
        Axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
        Axios.get(api1)
          .then((response1) => {
            const Data1 = response1.data;
            setfirst_name(Data1.first_name);
            setlast_name(Data1.last_name);
            setEmail(Data1.email);
            setEditedUsername({
              first_name: Data1.first_name,
              last_name: Data1.last_name,
            });

            setfirst_name1(Data1.first_name);
            setlast_name1(Data1.last_name);
            setEmail1(Data1.email);

            setfirst_name2(Data1.first_name);
            setlast_name2(Data1.last_name);
            setEmail2(Data1.email);

            setfirst_name3(Data1.first_name);
            setlast_name3(Data1.last_name);
            setEmail3(Data1.email);
            return Axios.get(api3);
          })

          .then((response3) => {
            const Data3 = response3.data[0];
            console.log(response3);
            setStreet(Data3.street);
            setCity(Data3.city);
            setFarmState(Data3.state);
            setEditedFarmAddress({
              street: Data3.street,
              city: Data3.city,
              state: Data3.state,
            });

            setStreet1(Data3.street);
            setCity1(Data3.city);
            setState1(Data3.state);
            setEditedAddress({
              street: Data3.street,
              city: Data3.city,
              state: Data3.state,
            });

            setStreet2(Data3.street);
            setCity2(Data3.city);
            setState2(Data3.state);

            setStreet3(Data3.street);
            setCity3(Data3.city);
            setState3(Data3.state);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        onClose();
      }
    } catch (error) {
      console.error("Error during login:", error.response.data.detail);
      setErrorMessage("Oops! Invalid login credentials. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("userRole:", userRole);
    console.log("userName:", userName);

    console.log("userId:", userId);
  }, [userRole, userName, userId]);

  return (
    <>
      {isLoginOpen && (
        <div className={styles.logIn}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <button
              className={styles.forgotPassword}
              onClick={openForgotPassword}
            >
              Forgot Password?
            </button>
            <div className={styles.keepMeLogged}>Keep me logged in</div>
            <input
              className={styles.groupItem}
              type="checkbox"
              defaultChecked={true}
            />
            <div className={styles.logIn1}>{`Log in `}</div>
            <Input
              className={styles.groupInner}
              variant="outline"
              width="400px"
              size="lg"
              type="email"
              name="email"
              placeholder="Email Address"
              w="400px"
              onChange={handleInputChange}
            />

            <Input
              className={styles.rectangleInput}
              variant="outline"
              width="400px"
              size="lg"
              name="password"
              type="password"
              placeholder="Password"
              w="400px"
              onChange={handleInputChange}
            />

            <button
              className={styles.rectangleGroup}
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? (
                <Spinner size="sm" /> // Show the spinner while loading
              ) : (
                <>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.logIn2}>Log in</div>
                </>
              )}
            </button>
            {errorMessage && (
              <div className={`${styles.errorMessage} ${styles.errorBox}`}>
                {errorMessage}
              </div>
            )}
            <div className={styles.groupChild1} />
            <button className={styles.signUp} onClick={openRegisterAsPopup}>
              Sign up
            </button>
            <div className={styles.dontHaveAn}>{`Don’t have an account? `}</div>
          </div>
        </div>
      )}
      {isRegisterAsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRegisterAsPopup}
        >
          <RegisterAs onClose={closeRegisterAsPopup} />
        </PortalPopup>
      )}

      {isForgotPasswordOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeForgotPassword}
        >
          <ForgotPassword onClose={closeForgotPassword} />
        </PortalPopup>
      )}
    </>
  );
};

export default LogIn;
