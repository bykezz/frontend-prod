import { useCallback } from "react";
import StorageNavigation from "../components/StorageNavigation";
import "antd/dist/antd.min.css";
import Footer from "../components/Footer";
import { Input } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AvailableStorage from "../components/AvailableStorage";
import StorageFilter from "../components/StorageFilter";
import NextPageBar from "../components/NextPageBar";
import SearchBar from "../components/SearchBar";
import styles from "./Storage.module.css";
const Storage = () => {
  const navigate = useNavigate();

  const onKaniStoargeCard1Click = useCallback(() => {
    navigate("/kani-storage");
  }, [navigate]);

  const onKaniStorageCard2Click = useCallback(() => {
    navigate("/kani-storage");
  }, [navigate]);

  const onKaniStorageCard3Click = useCallback(() => {
    navigate("/kani-storage");
  }, [navigate]);

  const onKaniStorageCard4Click = useCallback(() => {
    navigate("/kani-storage");
  }, [navigate]);

  return (
    <div className={styles.storage}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.pexelsTomFisk97080112Wrapper}>
          <img
            className={styles.pexelsTomFisk97080112Icon}
            alt=""
            src="/pexelstomfisk9708011-22@2x.png"
          />
        </div>
        <AvailableStorage />
        <StorageFilter />
        <Input
          className={styles.frameItem}
          type="search"
          style={{ width: "752.7847290039062px" }}
          prefix={<SearchOutlined />}
          size="large"
          placeholder="   Find a facility around you. Enter an address, neigbhourhood or ZIP code"
        />
        <button className={styles.frameParent}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.searchWrapper}>
            <div className={styles.search}>Search</div>
          </div>
        </button>
        <footer className={styles.footer} id="footer">
          <Footer />
        </footer>
        <NextPageBar frameButtonTop="2035px" />
      </div>
      <StorageNavigation />
      <SearchBar
        dimensionText="/phuserlight6.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.41%"
      />
    </div>
  );
};

export default Storage;
