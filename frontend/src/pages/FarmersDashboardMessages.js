import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DashboardNavigation from "../components/DashboardNavigation";
import styles from "./FarmersDashboardMessages.module.css";

const FarmersDashboardMessages = () => {
  const navigate = useNavigate();

  const onNewPurchaseAlertClick = useCallback(() => {
    navigate("/farmers-dashboard-main-message");
  }, [navigate]);

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

  return (
    <div className={styles.farmersDashboardMessages}>
      <SearchBar
        dimensionText="/phuserlight3.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.4%"
      />
      <div className={styles.farmerDashboardAllMessage}>
        <div className={styles.farmerDashboardAllMessageChild} />
        <div className={styles.farmerDashboardAllMessageItem} />
        <button className={styles.markUnread}>Mark Unread</button>
        <button className={styles.archive}>Archive</button>
        <button className={styles.delete}>Delete</button>
        <button className={styles.read}>Read</button>
        <button className={styles.unread}>Unread</button>
        <div className={styles.farmerDashboardAllMessageInner} />
        <div className={styles.messageItem}>
          <button
            className={styles.newPurchaseAlertContainer}
            onClick={onNewPurchaseAlertClick}
          >
            <b className={styles.newPurchaseAlert}>New purchase alert</b>
            <span className={styles.newPurchaseAlert}>
              {" "}
              - Hello Sunny Farms, a purchase has just been made for products on
              your farm. Here are the....
            </span>
          </button>
          <input className={styles.messageItemChild} type="checkbox" />
          <div className={styles.messageItemItem} />
        </div>
        <button className={styles.newPurchaseAlertContainer1}>
          <b className={styles.newPurchaseAlert}>New purchase alert</b>
          <span className={styles.newPurchaseAlert}>
            {" "}
            - Hello Sunny Farms, a purchase has just been made for products on
            your farm. Here are the....
          </span>
        </button>
        <input className={styles.rectangleInput} type="checkbox" />
        <div className={styles.lineDiv} />
        <button className={styles.newPurchaseAlertContainer2}>
          <b className={styles.newPurchaseAlert}>New purchase alert</b>
          <span className={styles.newPurchaseAlert}>
            {" "}
            - Hello Sunny Farms, a purchase has just been made for products on
            your farm. Here are the....
          </span>
        </button>
        <input
          className={styles.farmerDashboardAllMessageChild1}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild2} />
        <button className={styles.newPurchaseAlert3}>
          New purchase alert - Hello Sunny Farms, a purchase has just been made
          for products on your farm. Here are the....
        </button>
        <input
          className={styles.farmerDashboardAllMessageChild3}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild4} />
        <button className={styles.newPurchaseAlert4}>
          New purchase alert - Hello Sunny Farms, a purchase has just been made
          for products on your farm. Here are the....
        </button>
        <input
          className={styles.farmerDashboardAllMessageChild5}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild6} />
        <button className={styles.newPurchaseAlert5}>
          New purchase alert - Hello Sunny Farms, a purchase has just been made
          for products on your farm. Here are the....
        </button>
        <input
          className={styles.farmerDashboardAllMessageChild7}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild8} />
        <button className={styles.newPurchaseAlert6}>
          New purchase alert - Hello Sunny Farms, a purchase has just been made
          for products on your farm. Here are the....
        </button>
        <input
          className={styles.farmerDashboardAllMessageChild9}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild10} />
        <button className={styles.newPurchaseAlert7}>
          New purchase alert - Hello Sunny Farms, a purchase has just been made
          for products on your farm. Here are the....
        </button>
        <input
          className={styles.farmerDashboardAllMessageChild11}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild12} />
        <button className={styles.newPurchaseAlert8}>
          New purchase alert - Hello Sunny Farms, a purchase has just been made
          for products on your farm. Here are the....
        </button>
        <input
          className={styles.farmerDashboardAllMessageChild13}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild14} />
        <button className={styles.newPurchaseAlert9}>
          New purchase alert - Hello Sunny Farms, a purchase has just been made
          for products on your farm. Here are the....
        </button>
        <input
          className={styles.farmerDashboardAllMessageChild15}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild16} />
        <div className={styles.newPurchaseAlert10}>
          New purchase alert - Hello Sunny Farms, a purchase has just been made
          for products on your farm. Here are the....
        </div>
        <input
          className={styles.farmerDashboardAllMessageChild17}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild18} />
        <button className={styles.newPurchaseAlert11}>
          New purchase alert - Hello Sunny Farms, a purchase has just been made
          for products on your farm. Here are the....
        </button>
        <input
          className={styles.farmerDashboardAllMessageChild19}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild20} />
        <button className={styles.newPurchaseAlert12}>
          New purchase alert - Hello Sunny Farms, a purchase has just been made
          for products on your farm. Here are the....
        </button>
        <button className={styles.button}>1</button>
        <button className={styles.button1}>2</button>
        <button className={styles.button2}>3</button>
        <div className={styles.div1}>......</div>
        <button className={styles.button3}>56</button>
        <input
          className={styles.farmerDashboardAllMessageChild21}
          type="checkbox"
        />
        <div className={styles.farmerDashboardAllMessageChild22} />
        <button className={styles.bxsupArrow}>
          <img className={styles.vectorIcon} alt="" src="/vector28.svg" />
        </button>
        <button className={styles.bxsupArrow1}>
          <img className={styles.vectorIcon} alt="" src="/vector28.svg" />
        </button>
        <button className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.all}>All</div>
        </button>
      </div>
      <div className={styles.dashboardNavigation}>
        <DashboardNavigation
          onGroupButton2Click={onGroupButton2Click}
          onGroupButton3Click={onGroupButton3Click}
          onGroupButton4Click={onGroupButton4Click}
          onGroupButton5Click={onGroupButton5Click}
          onGroupButton6Click={onGroupButton6Click}
          onGroupButton7Click={onGroupButton7Click}
        />
      </div>
    </div>
  );
};

export default FarmersDashboardMessages;
