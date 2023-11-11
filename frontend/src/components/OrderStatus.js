import styles from "./OrderStatus.module.css";
const OrderStatus = () => {
  return (
    <div className={styles.orderStatus}>
      <div className={styles.frameParent}>
        <img className={styles.groupChild} alt="" src="/frame-53.svg" />
        <div className={styles.groupItem} />
        <img
          className={styles.mdipackageVariantClosedDelIcon}
          alt=""
          src="/mdipackagevariantcloseddelivered.svg"
        />
        <img className={styles.lasortIcon} alt="" src="/lasort.svg" />
        <img
          className={styles.fa6SolidtruckFastIcon}
          alt=""
          src="/fa6solidtruckfast5.svg"
        />
        <img
          className={styles.fluentEmojiHighContrastpalIcon}
          alt=""
          src="/fluentemojihighcontrastpalmuphand.svg"
        />
        <img className={styles.biboxFillIcon} alt="" src="/biboxfill.svg" />
        <div className={styles.orderPlaced}>Order Placed</div>
        <div className={styles.jul20}>Jul 20</div>
        <div className={styles.jul201}>Jul 20</div>
        <div className={styles.jul21}>Jul 21</div>
        <div className={styles.jul23}>Jul 23</div>
        <div className={styles.jul24}>Jul 24</div>
        <div className={styles.orderReceived}>Order Received</div>
        <div className={styles.inTransit}>In Transit</div>
        <div className={styles.sortingOrder}>Sorting Order</div>
        <div className={styles.delivered}>Delivered</div>
      </div>
      <div className={styles.orderStatusInContainer}>
        <span>{`Order Status: `}</span>
        <span className={styles.inTransit1}>In Transit</span>
      </div>
      <div className={styles.estimatedDeliveryDate}>
        Estimated Delivery Date: July 24th
      </div>
    </div>
  );
};

export default OrderStatus;
