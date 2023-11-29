import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EditProfileBuyers from "../components/EditProfileBuyers";
import DashboardNavigation from "../components/DashboardNavigation";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import styles from "./BuyersDashboardEditProfil.module.css";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { useCustomerProfile } from "../context/CustomerProfileContext";

const BuyersDashboardEditProfil = () => {
  const { token } = useAuth();
  const {
    setfirst_name1,
    setlast_name1,
    editedUsername,
    editedAddress,
    setStreet1,
    setCity1,
    setState1,
  } = useCustomerProfile();
  const navigate = useNavigate();

  const onGroupButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onGroupButton4Click = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onGroupButton5Click = useCallback(() => {
    navigate("/storage");
  }, [navigate]);

  const onGroupButton6Click = useCallback(() => {
    navigate("/farmers-deals");
  }, [navigate]);

  const onGroupButton7Click = useCallback(() => {
    navigate("/track-order");
  }, [navigate]);

  const handleSwitch = useCallback(() => {
    navigate("/buyers-dashboard-profile");
  }, [navigate]);

  const handleSave = () => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .put("http://127.0.0.1:8000/auth/users/me/", editedUsername)
      .then((response) => {
        console.log("Profile updated successfully", response.data);
        setfirst_name1(response.data.first_name);
        setlast_name1(response.data.last_name);
      });

    axios
      .post("http://127.0.0.1:8000/address/", editedAddress)
      .then((response) => {
        console.log("Profile updated successfully", response.data);
        setStreet1(response.data.street);
        setCity1(response.data.city);
        setState1(response.data.state);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
    handleSwitch();
  };

  return (
    <div className={styles.buyersDashboardEditProfil}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <EditProfileBuyers />
        <button className={styles.rectangleGroup} onClick={handleSave}>
          <div className={styles.groupChild} />
          <div className={styles.save}>Save</div>
        </button>
        <footer className={styles.footer} id="footer">
          <Footer />
        </footer>
      </div>
      <DashboardNavigation
        onGroupButton2Click={onGroupButton2Click}
        onGroupButton3Click={onGroupButton3Click}
        onGroupButton4Click={onGroupButton4Click}
        onGroupButton5Click={onGroupButton5Click}
        onGroupButton6Click={onGroupButton6Click}
        onGroupButton7Click={onGroupButton7Click}
      />
      <SearchBar
        dimensionText="/phuserlight3.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.4%"
      />
    </div>
  );
};

export default BuyersDashboardEditProfil;
