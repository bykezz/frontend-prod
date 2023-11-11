import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WishListBuyers.module.css";
const WishListBuyers = () => {
  const navigate = useNavigate();

  const onPurchaseHistoryClick = useCallback(() => {
    navigate("/buyers-dashboard-purchase-history");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/buyers-dashboard-profile");
  }, [navigate]);

  return (
    <div className={styles.wishListBuyers}>
      <div className={styles.wishListBuyersChild} />
      <button
        className={styles.purchaseHistory}
        onClick={onPurchaseHistoryClick}
      >
        Purchase History
      </button>
      <button className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.wishList}>Wish List</div>
      </button>
      <button className={styles.profileWrapper} onClick={onGroupButton1Click}>
        <div className={styles.profile}>Profile</div>
      </button>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.product}>Product</div>
        <div className={styles.farm}>Farm</div>
        <div className={styles.costkg}>Cost/Kg</div>
      </div>
    </div>
  );
};

export default WishListBuyers;
