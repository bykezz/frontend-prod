import styles from "./AreYouSure.module.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useFarmerProfile } from "../context/FarmerProfileContext";

const AreYouSure = ({ onClose, id }) => {
  const { setFarmersProducts } = useFarmerProfile();
  const { token } = useAuth();

  const onYes = () => {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    axios
      .delete(`http://127.0.0.1:8000/product/${id}/`)
      .then((response) => {
        console.log(response.data);
        return axios.get(`http://127.0.0.1:8000/farmers/my_products/`);
      })
      .then((response2) => {
        setFarmersProducts(response2.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className={styles.areYouSure}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.areYouSure1}>Are you sure about this?</div>
        <button className={styles.rectangleGroup} onClick={onClose}>
          <div className={styles.groupItem} />
          <div className={styles.yes} onClick={onYes}>
            Yes
          </div>
        </button>
        <button className={styles.rectangleContainer} onClick={onClose}>
          <div className={styles.groupInner} />
          <div className={styles.no}>No</div>
        </button>
      </div>
    </div>
  );
};

export default AreYouSure;
