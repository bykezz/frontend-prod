import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PurchaseHistoryBuyers.module.css";
const PurchaseHistoryBuyers = () => {
  const navigate = useNavigate();

  const onWishListClick = useCallback(() => {
    navigate("/buyers-dashboard-wish-list");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/buyers-dashboard-profile");
  }, [navigate]);

  return (
    <div className={styles.purchaseHistoryBuyers}>
      <div className={styles.purchaseHistoryBuyersChild} />
      <button className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.purchaseHistory}>Purchase History</div>
      </button>
      <button className={styles.wishList} onClick={onWishListClick}>
        Wish List
      </button>
      <button className={styles.profileWrapper} onClick={onGroupButton1Click}>
        <div className={styles.profile}>Profile</div>
      </button>
    </div>
  );
};

export default PurchaseHistoryBuyers;
