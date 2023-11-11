import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WishListBuyers from "../components/WishListBuyers";
import DashboardNavigation from "../components/DashboardNavigation";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styles from "./BuyersDashboardWishList.module.css";
const BuyersDashboardWishList = () => {
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

  const onPhxCircleLight2Click = useCallback(() => {
    // Please sync "Buyer's page" to the project
  }, []);

  return (
    <div className={styles.buyersDashboardWishList}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <WishListBuyers />
        <div className={styles.cabbageParent}>
          <div className={styles.cabbage}>Cabbage</div>
          <div className={styles.zenFarms}>Zen farms</div>
          <div className={styles.n500}>N500</div>
          <img className={styles.pngimgIcon} alt="" src="/pngimg@2x.png" />
          <button className={styles.phxCircleLight}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </button>
        </div>
        <div className={styles.tomatoParent}>
          <div className={styles.tomato}>Tomato</div>
          <div className={styles.zenFarms}>Sida farms</div>
          <div className={styles.n500}>N500</div>
          <img
            className={styles.pngTomato18702Icon}
            alt=""
            src="/png-tomato-18702@2x.png"
          />
          <button className={styles.phxCircleLight1}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </button>
        </div>
        <div className={styles.spinachParent}>
          <div className={styles.spinach}>Spinach</div>
          <div className={styles.zenFarms1}>Zen farms</div>
          <div className={styles.n5002}>N500</div>
          <img
            className={styles.freshChineseSpinachPngClipIcon}
            alt=""
            src="/freshchinesespinachpngclipart@2x.png"
          />
          <button
            className={styles.phxCircleLight2}
            onClick={onPhxCircleLight2Click}
          >
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </button>
        </div>
        <footer className={styles.footer} id="footer">
          <Footer />
        </footer>
      </div>
      <DashboardNavigation
        imageDimensions="/antdesignhomeoutlined.svg"
        imageDimensionsText="/claritystoreline6.svg"
        imageDimensionsCode="/fa6solidtruckfast.svg"
        imageDimensionsCodeText="/mdisilooutline.svg"
        imageDimensionsTextCode="/healthiconsfruitsoutline7.svg"
        imageDimensionsTextCode2="/carbonmap4.svg"
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

export default BuyersDashboardWishList;
