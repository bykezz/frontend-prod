import { useCallback } from "react";
import LogisticsNavigation from "../components/LogisticsNavigation";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import Footer from "../components/Footer";
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
import NextPageBar from "../components/NextPageBar";
import AvailableLogistics from "../components/AvailableLogistics";
import LogisticsFilter from "../components/LogisticsFilter";
import SearchBar from "../components/SearchBar";
import styles from "./Logistics.module.css";
const Logistics = () => {
  const navigate = useNavigate();

  const onTransLogisticsCard1Click = useCallback(() => {
    navigate("/trans-logistic");
  }, [navigate]);

  const onTransLogisticsCard2Click = useCallback(() => {
    navigate("/trans-logistic");
  }, [navigate]);

  const onTransLogisticsCard3Click = useCallback(() => {
    navigate("/trans-logistic");
  }, [navigate]);

  return (
    <div className={styles.logistics}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <Footer />
          <NextPageBar frameButtonTop="2035px" />
        </div>
        <div className={styles.pexelsTomFisk97080112Parent}>
          <img
            className={styles.pexelsTomFisk97080112Icon}
            alt=""
            src="/pexelstomfisk9708011-2@2x.png"
          />
          <button className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
              </div>
              <div className={styles.searchWrapper}>
                <div className={styles.search}>Search</div>
              </div>
            </div>
          </button>
          <Input
            className={styles.groupInput}
            type="search"
            style={{ width: "718px" }}
            prefix={<SearchOutlined />}
            size="large"
            placeholder="Find a Logistic Company around you. Enter an address, neigbhourhood or ZIP code"
          />
          <AvailableLogistics />
        </div>
        <LogisticsNavigation />

        <LogisticsFilter />
      </div>
      <SearchBar
        dimensionText="/phuserlight2.svg"
        dimensionText2="/bibasketfill2.svg"
        propRight="5.41%"
      />
    </div>
  );
};

export default Logistics;
