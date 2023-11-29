import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BuyersProfile.module.css";
import { useCustomerProfile } from "../context/CustomerProfileContext";

const BuyersProfile = () => {
  const navigate = useNavigate();
  const { first_name1, last_name1, email1, street1, city1, state1 } =
    useCustomerProfile();

  const onPurchaseHistoryClick = useCallback(() => {
    navigate("/buyers-dashboard-purchase-history");
  }, [navigate]);

  const onWishListClick = useCallback(() => {
    navigate("/buyers-dashboard-wish-list");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/buyers-edit-profile");
  }, [navigate]);

  return (
    <div className={styles.buyersProfile}>
      <div className={styles.buyersProfileChild} />
      <button
        className={styles.purchaseHistory}
        onClick={onPurchaseHistoryClick}
      >
        Purchase History
      </button>
      <button className={styles.wishList} onClick={onWishListClick}>
        Wish List
      </button>
      <div className={styles.nameJamesOkeke}>
        Name: {first_name1} {last_name1}
      </div>
      <div className={styles.emailJamesokekegmailcom}>Email: {email1}</div>
      <div className={styles.addressArea2}>
        Address: {street1 ? `${street1}, ${city1}, ${state1}.` : ""}
      </div>
      <button className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.profile}>Profile</div>
      </button>
      <button className={styles.rectangleGroup} onClick={onGroupButton1Click}>
        <div className={styles.groupItem} />
        <div className={styles.editProfile}>Edit Profile</div>
      </button>
    </div>
  );
};

export default BuyersProfile;
