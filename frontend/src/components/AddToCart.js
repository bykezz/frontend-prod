import { useState, useCallback, useEffect } from "react";
import styles from "./AddToCart.module.css";
import axios from "axios";
import { useCartContext1 } from "../context/CartContext1";
import { useLogisticsProfile } from "../context/LogisticsProfileContext";
import { useAuth } from "../context/AuthContext";

const AddToCart = ({ onClose, cartItems }) => {
  const [isAddressPopupOpen, setAddressPopupOpen] = useState(false);
  const [isEdit, setEdit] = useState();
  const { isLoggedIn } = useAuth();
  const { street2, city2, state2, setStreet2, setCity2, setState2 } =
    useLogisticsProfile();
  const {
    cartItems1,
    cartItems2,
    total,
    setCartItems1,
    setCartItems2,
    setTotal,
    setCount,
    cartId,
  } = useCartContext1();

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, [cartItems]);

  const openAddressPopup = useCallback(() => {
    setAddressPopupOpen(true);
  }, []);

  const closeAddressPopup = useCallback(() => {
    setAddressPopupOpen(false);
  }, []);

  const openEdit = useCallback(() => {
    setEdit(true);
  }, []);
  const closeEdit = useCallback(() => {
    setEdit(false);
  }, []);

  useEffect(() => {
    axios
      .get(`http://13.53.125.166/carts/${cartId}/`)
      .then((response) => {
        setCartItems1(response.data.items);
        setCount(response.data.total_items);
        setTotal(response.data.total_cost);
        setCartItems2(response.data.farmjointitems);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    {
      !isLoggedIn && (setStreet2(""), setCity2(""), setState2(""));
    }
  }, []);

  const handleDelete1 = (itemId) => {
    axios
      .delete(`http://13.53.125.166/carts/${cartId}/items/${itemId}/`)
      .then((response) => {
        console.log(response.data);
        return axios.get(`http://13.53.125.166/carts/${cartId}/`);
      })
      .then((response) => {
        setCartItems1(response.data.items);
        setCount(response.data.total_items);
        setTotal(response.data.total_cost);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleDelete2 = (itemId) => {
    axios
      .delete(`http://13.53.125.166/carts/${cartId}/fjitems/${itemId}/`)
      .then((response) => {
        console.log(response.data);
        return axios.get(`http://13.53.125.166/carts/${cartId}/`);
      })
      .then((response) => {
        setCartItems1(response.data.items);
        setCount(response.data.total_items);
        setTotal(response.data.total_cost);
        setCartItems2(response.data.farmjointitems);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div className={styles.top}>
        {isEdit ? (
          <>
            <button className={styles.rectangleGroup1} onClick={closeEdit}>
              <div className={styles.groupItem1} />
              <div className={styles.confirm}>Confirm</div>
            </button>
            <input className={styles.confirmAddressItem} type="text" />
            <div className={styles.confirmAddress1}>
              <span className={styles.confirm1}>Confirm</span>
              <span className={styles.address}> Address</span>
            </div>
            <button className={styles.phxCircleLight4} onClick={closeEdit}>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            </button>
          </>
        ) : (
          <>
            {isAddressPopupOpen ? (
              <>
                <button className={styles.rectangleGroup1} onClick={openEdit}>
                  <div className={styles.groupItem1} />
                  <div className={styles.edit}>Edit</div>
                </button>
                <div className={styles.address1}>Address</div>
                <div className={styles.house2Preston}>
                  {street2},{city2},{state2}.
                </div>
                <button
                  className={styles.phxCircleLight4}
                  onClick={closeAddressPopup}
                >
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector1.svg"
                  />
                </button>
              </>
            ) : (
              <>
                <div className={styles.yourCart}>
                  <span className={styles.your}>Your</span>
                  <span className={styles.cart}> Cart</span>
                </div>{" "}
                <button className={styles.phxCircleLight4} onClick={onClose}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector1.svg"
                  />
                </button>
              </>
            )}
          </>
        )}
      </div>
      <div className={styles.addToCart} id="add-to-cart" data-animate-on-scroll>
        <div className={styles.addToCartChild} />
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />

            <div className={styles.cartItemsContainer}>
              <div className={styles.contain}>
                {cartItems1.map((item) => {
                  return (
                    <div className={styles.groupParent1} key={item.id}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.groupChild1} />
                        <img
                          className={styles.lettuceRemovebgPreview2Icon}
                          alt=""
                          src={item.product.images[0].image}
                        />
                      </div>
                      <div className={styles.lettuce}>{item.product.name}</div>
                      <div className={styles.n2000kg}>
                        ₦{item.product.sale_price || item.product.regular_price}
                        /kg
                      </div>
                      <div className={styles.n4000}>₦{item.total_price}</div>
                      <div className={styles.x2kg}>x{item.quantity}</div>
                      <button
                        className={styles.phxCircleLight}
                        onClick={() => {
                          handleDelete1(item.id);
                        }}
                      >
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector1.svg"
                        />
                      </button>
                    </div>
                  );
                })}
                {cartItems2.map((item) => {
                  return (
                    <div className={styles.groupParent2} key={item.id}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.groupChild1} />
                        <img
                          className={styles.lettuceRemovebgPreview2Icon}
                          alt=""
                          src={item.item.images[0].image}
                        />
                      </div>
                      <div className={styles.lettuce}>{item.item.name}</div>
                      <div className={styles.n2000kg}>
                        ₦{item.item.price}
                        /kg
                      </div>
                      <div className={styles.n4000}>₦{item.total_price}</div>
                      <div className={styles.x2kg}>x{item.quantity}</div>
                      <button
                        className={styles.phxCircleLight}
                        onClick={() => {
                          handleDelete2(item.id);
                        }}
                      >
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector1.svg"
                        />
                      </button>
                    </div>
                  );
                })}
                <div className={styles.bottom}>
                  <div className={styles.n20000}>₦{total}</div>
                  <div className={styles.total}>Total</div>
                  {isAddressPopupOpen ? (
                    <>
                      <button className={styles.rectangleParent20}>
                        <div className={styles.groupChild20} />
                        <b className={styles.makePayment}>MAKE PAYMENT</b>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className={styles.groupWrapper}
                        onClick={openAddressPopup}
                      >
                        <div className={styles.rectangleGroup}>
                          <div className={styles.groupItem} />
                          <b className={styles.checkout}>CHECKOUT</b>
                        </div>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
