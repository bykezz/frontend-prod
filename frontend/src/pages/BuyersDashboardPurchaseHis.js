import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PurchaseHistoryBuyers from "../components/PurchaseHistoryBuyers";
import DashboardNavigation from "../components/DashboardNavigation";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styles from "./BuyersDashboardPurchaseHis.module.css";
const BuyersDashboardPurchaseHis = () => {
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

  const onPhxCircleLight3Click = useCallback(() => {
    // Please sync "Buyer's page" to the project
  }, []);

  return (
    <div className={styles.buyersDashboardPurchaseHis}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <PurchaseHistoryBuyers />
        <div className={styles.thJuly2023Parent}>
          <div className={styles.thJuly2023}>27th July,2023</div>
          <div className={styles.cabbage}>Cabbage</div>
          <div className={styles.kg}>20 kg</div>
          <div className={styles.n10000}>N10,000</div>
          <img className={styles.pngimgIcon} alt="" src="/pngimg@2x.png" />
          <button className={styles.phxCircleLight}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </button>
        </div>
        <div className={styles.thJuly2023Group}>
          <div className={styles.thJuly20231}>27th July,2023</div>
          <div className={styles.n100001}>N10,000</div>
          <div className={styles.kg1}>20 kg</div>
          <div className={styles.tomato}>Tomato</div>
          <img
            className={styles.pngTomato18702Icon}
            alt=""
            src="/png-tomato-18702@2x.png"
          />
          <button className={styles.phxCircleLight1}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </button>
        </div>
        <div className={styles.thJuly2023Container}>
          <div className={styles.thJuly20232}>27th July,2023</div>
          <div className={styles.n100002}>N10,000</div>
          <div className={styles.kg2}>20 kg</div>
          <div className={styles.spinach}>Spinach</div>
          <img
            className={styles.freshChineseSpinachPngClipIcon}
            alt=""
            src="/freshchinesespinachpngclipart@2x.png"
          />
          <button className={styles.phxCircleLight2}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </button>
        </div>
        <div className={styles.thMay2023Parent}>
          <div className={styles.thJuly20231}>7th May,2023</div>
          <div className={styles.n100001}>N10,000</div>
          <div className={styles.kg1}>20 kg</div>
          <div className={styles.tomato}>Tomato</div>
          <img
            className={styles.pngTomato18702Icon}
            alt=""
            src="/png-tomato-18702@2x.png"
          />
          <button
            className={styles.phxCircleLight1}
            onClick={onPhxCircleLight3Click}
          >
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </button>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.date}>Date</div>
          <div className={styles.product}>Product</div>
          <div className={styles.quantity}>Quantity</div>
          <div className={styles.cost}>Cost</div>
        </div>
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

export default BuyersDashboardPurchaseHis;
