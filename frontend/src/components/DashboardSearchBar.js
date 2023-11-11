import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
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
import RegisterAs from "./RegisterAs";
import PortalPopup from "./PortalPopup";
import AddToCart from "./AddToCart";
import styles from "./DashboardSearchBar.module.css";
const DashboardSearchBar = ({ dimensionCode }) => {
  const [isRegisterAsPopupOpen, setRegisterAsPopupOpen] = useState(false);
  const [isAddToCartOpen, setAddToCartOpen] = useState(false);

  const openRegisterAsPopup = useCallback(() => {
    setRegisterAsPopupOpen(true);
  }, []);

  const closeRegisterAsPopup = useCallback(() => {
    setRegisterAsPopupOpen(false);
  }, []);

  const openAddToCart = useCallback(() => {
    setAddToCartOpen(true);
  }, []);

  const closeAddToCart = useCallback(() => {
    setAddToCartOpen(false);
  }, []);

  return (
    <>
      <div className={styles.dashboardSearchbar}>
        <div className={styles.dashboardSearchbarInner}>
          <Input
            className={styles.groupChild}
            type="search"
            style={{ width: "750px" }}
            prefix={<SearchOutlined />}
            size="large"
            placeholder="      Search any category"
          />
        </div>
        <button
          className={styles.rectangleParent}
          onClick={openRegisterAsPopup}
        >
          <div className={styles.groupItem} />
          <div className={styles.register}>Register</div>
        </button>
        <button className={styles.groupParent} onClick={openAddToCart}>
          <div className={styles.cartParent}>
            <div className={styles.cart}>Cart</div>
            <img
              className={styles.bibasketFillIcon}
              alt=""
              src={dimensionCode}
            />
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.groupInner} />
            <div className={styles.div}>5</div>
          </div>
        </button>
      </div>
      {isRegisterAsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRegisterAsPopup}
        >
          <RegisterAs onClose={closeRegisterAsPopup} />
        </PortalPopup>
      )}
      {isAddToCartOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeAddToCart}
        >
          <AddToCart onClose={closeAddToCart} />
        </PortalPopup>
      )}
    </>
  );
};

export default DashboardSearchBar;
