import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import Footer from "../components/Footer";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import TrackOrderNavigation from "../components/TrackOrderNavigation";
import SearchBar from "../components/SearchBar";
import styles from "./TrackOrder.module.css";
const TrackOrder = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onGroupButton0Click = useCallback(() => {
    navigate("/farmers-deals");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/logistics");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/storage");
  }, [navigate]);

  const onFarmjointLogo2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleOrdertracking = useCallback(() => {
    navigate("/order-tracking");
  }, [navigate]);

  return (
    <div className={styles.trackOrder}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.pexelsTomFisk97080112Parent}>
          <img
            className={styles.pexelsTomFisk97080112Icon}
            alt=""
            src="/pexelstomfisk9708011-21@2x.png"
          />
          <Input
            className={styles.groupChild}
            type="search"
            style={{ width: "752.7847290039062px" }}
            prefix={<SearchOutlined />}
            size="large"
            placeholder="     Input your tracking number"
          />
          <button className={styles.frameParent1} onClick={handleOrdertracking}>
            <div className={styles.rectangleWrapper1}>
              <div className={styles.frameInner1} />
            </div>
            <div className={styles.searchWrapper1}>
              <div className={styles.search1}>Track</div>
            </div>
          </button>
        </div>
        <footer className={styles.footer} id="footer">
          <Footer />
        </footer>
      </div>
      <TrackOrderNavigation
        imageDimensions="/antdesignhomeoutlined2.svg"
        imageDimensionsText="/claritystoreline1.svg"
        imageDimensionsCode="/healthiconsfruitsoutline2.svg"
        onGroupButtonClick={onGroupButtonClick}
        onGroupButton1Click={onGroupButton1Click}
        onGroupButton0Click={onGroupButton0Click}
        onGroupButton2Click={onGroupButton2Click}
        onGroupButton3Click={onGroupButton3Click}
        onFarmjointLogo2Click={onFarmjointLogo2Click}
      />
      <SearchBar
        dimensionText="/phuserlight3.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.4%"
      />
    </div>
  );
};

export default TrackOrder;
