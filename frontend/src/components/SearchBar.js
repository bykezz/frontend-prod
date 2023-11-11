import { useState, useMemo, useCallback, useEffect } from "react";
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
import LogIn from "./LogIn";
import AddToCart from "./AddToCart";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { useCartContext } from "../context/CartContext";
import { useCartContext1 } from "../context/CartContext1";
import { useAuth } from "../context/AuthContext";
import { useSearch } from "../context/SearchContext";
import { useFarmerProfile } from "../context/FarmerProfileContext";
import Cookies from "js-cookie";

const SearchBar = ({ dimensionText, dimensionText2, propRight }) => {
  const { isLoggedIn, handleLogout, userRole, token } = useAuth();
  const { cartItems } = useCartContext();
  const [search, setSearch] = useState([]);
  const { setProducts, setProducts1 } = useSearch();
  const [showDropdown, setShowDropdown] = useState(false);
  const { profilePicture, first_name } = useFarmerProfile();
  const { cartId, cartItems1, count, setCount, setTotal, setCartId } =
    useCartContext1();
  const history = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [input, setInput] = useState();
  const [isRegisterAsPopupOpen, setRegisterAsPopupOpen] = useState(false);
  const [isLogInPopupOpen, setLogInPopupOpen] = useState(false);
  const [isAddToCartOpen, setAddToCartOpen] = useState(false);

  const phuserLightIconStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const openRegisterAsPopup = useCallback(() => {
    setRegisterAsPopupOpen(true);
  }, []);

  const closeRegisterAsPopup = useCallback(() => {
    setRegisterAsPopupOpen(false);
  }, []);

  const openLogInPopup = useCallback(() => {
    setLogInPopupOpen(true);
  }, []);

  const closeLogInPopup = useCallback(() => {
    setLogInPopupOpen(false);
  }, []);

  const openAddToCart = useCallback(() => {
    setAddToCartOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeAddToCart = useCallback(() => {
    setAddToCartOpen(false);
    document.body.style.overflow = "auto";
  }, [cartItems]);

  const logout = useCallback(() => {
    Cookies.remove("jwtToken"); // Clear the JWT token
    handleLogout();
    history("/");
  }, [handleLogout]);

  const viewProfile = () => {
    handleDashboardSwitch();
  };
  const handleDashboardSwitch = () => {
    if (userRole === "Customer") {
      history("/buyers-dashboard-profile"); // Redirect to the buyer dashboard
    } else if (userRole === "Farmer") {
      history("/farmers-dashboard-profile");
    } else if (userRole === "Logistics") {
      history("/logistics-dashboard-profile");
    } else if (userRole === "Storage") {
      history("/storage-dashboard-profile");
    }
  };
  useEffect(() => {
    if (!cartId) {
      axios
        .post("http://13.53.125.166/carts/")
        .then((response) => {
          setCartId(response.data.id);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error creating a new cart:", error);
        });
    }
  }, []);
  const handleKeyDown = (e) => {
    if (currentPath === "/farmers-deals") {
      if (e.key === "Enter") {
        axios
          .get(`http://13.53.125.166/product/?search=${input}`)
          .then((response) => {
            setProducts(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error while searching:", error);
          });
      }
    } else if (currentPath === "/marketplace") {
      if (e.key === "Enter") {
        axios
          .get(`http://13.53.125.166/farmjointitem/?search=${input}`)
          .then((response) => {
            setProducts1(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error while searching:", error);
          });
      }
    } else if (currentPath !== "/farmers-deal" || "/marketplace") {
      if (e.key === "Enter") {
        history("/farmers-deals");
        axios
          .get(`http://13.53.125.166/product/?search=${input}`)
          .then((response) => {
            setProducts(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error while searching:", error);
          });
      }
    }
  };

  const getFilters = () => {
    if (currentPath === "/farmers-deals") {
      axios
        .get(`http://13.53.125.166/product/?search=${input}`)
        .then((response) => {
          setSearch(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error while searching:", error);
        });
    } else if (currentPath === "/marketplace") {
      axios
        .get(`http://13.53.125.166/farmjointitem/?search=${input}`)
        .then((response) => {
          setSearch(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error while searching:", error);
        });
    } else {
      axios
        .get(`http://13.53.125.166/search/?query=${input}`)
        .then((response) => {
          setSearch(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error while searching:", error);
        });
    }
  };

  const handleDocumentClick = useCallback((e) => {
    if (
      e.target.closest(`.${styles.searchDropdown}`) ||
      e.target.closest(`.${styles.groupChild}`)
    ) {
    } else {
      setShowDropdown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  const select = (item) => {
    if (currentPath === "/farmers-deals") {
      axios
        .get(`http://13.53.125.166/product/?search=${input}`)
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error while searching:", error);
        });
    } else if (currentPath === "/marketplace") {
      axios
        .get(`http://13.53.125.166/farmjointitem/?search=${input}`)
        .then((response) => {
          setProducts1(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error while searching:", error);
        });
    } else if (currentPath !== "/farmers-deal" || "/marketplace") {
      history("/farmers-deals");
      axios
        .get(`http://13.53.125.166/product/?select_search=${item.name}`)
        .then((response) => {
          setProducts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error while selecting search:", error);
        });
    }
  };

  return (
    <>
      <div className={styles.searchbar}>
        <div className={styles.searchbarInner}>
          <Input
            className={styles.groupChild}
            type="search"
            style={{ width: "100%" }}
            prefix={<SearchOutlined />}
            size="large"
            placeholder="      Search any category"
            onChange={(e) => {
              setInput(e.target.value);
              getFilters();
              setShowDropdown(true);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>

        {showDropdown && (
          <div className={styles.searchDropdown}>
            {search.slice(0, 10).map((item, index) => (
              <div key={index} onClick={() => select(item)}>
                <img className={styles.pic} alt="" src={item.images[0].image} />{" "}
                <span>
                  <b className={styles.item}>
                    {item.name || item.category_name}
                  </b>
                  <b className={styles.in}>in</b>
                  <b className={styles.cat}>{item.category_name}</b>
                </span>
              </div>
            ))}
          </div>
        )}

        <div className={styles.profileButtonContainer}>
          {!isLoggedIn ? (
            <button
              className={styles.rectangleParent}
              onClick={openRegisterAsPopup}
            >
              <div className={styles.groupItem} />
              <div className={styles.register}>Register</div>
            </button>
          ) : null}
          {isLoggedIn ? (
            <>
              <span onClick={logout} className={styles.signOutButton}>
                Logout
              </span>

              <button className={styles.ellipseGroup2} onClick={viewProfile}>
                {userRole === "Farmer" ? (
                  <img
                    className={styles.phuserLightIcon1}
                    alt=""
                    src={profilePicture ? profilePicture : "/group-491.svg"}
                  />
                ) : (
                  <img
                    className={styles.phuserLightIcon1}
                    alt=""
                    src="/group-491.svg"
                  />
                )}
              </button>
              <div className={styles.hello}>Hello {first_name} !</div>
            </>
          ) : (
            <button className={styles.groupParent} onClick={openLogInPopup}>
              <div className={styles.groupWrapper}>
                <div className={styles.signInWrapper}>
                  <div className={styles.signIn}>Sign In</div>
                </div>
              </div>
              <img
                className={styles.phuserLightIcon}
                alt=""
                src={dimensionText}
                onClick={openLogInPopup}
                style={phuserLightIconStyle}
              />
            </button>
          )}
        </div>
        <button className={styles.groupContainer} onClick={openAddToCart}>
          <div className={styles.cartParent}>
            <div className={styles.cart}>Cart</div>
            <img
              className={styles.bibasketFillIcon}
              alt=""
              src={dimensionText2}
            />
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.groupInner} />
            <span className={styles.div}>{count}</span>
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
      {isLogInPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogInPopup}
        >
          <LogIn onClose={closeLogInPopup} />
        </PortalPopup>
      )}
      {isAddToCartOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeAddToCart}
        >
          <AddToCart cartItems={cartItems1} onClose={closeAddToCart} />
        </PortalPopup>
      )}
    </>
  );
};

export default SearchBar;
