import { useState, useCallback } from "react";
import AddToCart from "./AddToCart";
import PortalPopup from "./PortalPopup";
import styles from "./FarmersDealProductDescripti.module.css";
import { useCartContext1 } from "../context/CartContext1";
import axios from "axios";

const FarmersDealProductDescripti = ({ product, productImage }) => {
  const [count, setCount1] = useState(1);
  const [isInfo, setInfo] = useState(true);
  const [isDesc, setDesc] = useState(false);
  const [isAddToCart1Open, setAddToCart1Open] = useState(false);
  const { cartId, setCartItems1, setTotal, setCount } = useCartContext1();

  const handleInfo = () => {
    setInfo(true);
    setDesc(false);
  };
  const handleDesc = () => {
    setDesc(true);
    setInfo(false);
  };

  const openAddToCart1 = useCallback(() => {
    setAddToCart1Open(true);
    const data = {
      product_id: product.id,
      quantity: count,
    };

    axios
      .post(
        `http://127.0.0.1:8000/carts/${cartId}/items/`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        return axios.get(`http://127.0.0.1:8000/carts/${cartId}/`);
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
  }, [cartId, count, product.id]);

  const closeAddToCart1 = useCallback(() => {
    setAddToCart1Open(false);
    document.body.style.overflow = "auto";
  }, []);

  const incrementCount = () => {
    setCount1(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount1(count - 1);
    }
  };
  return (
    <>
      <div className={styles.farmersDealProductDescripti}>
        <div className={styles.farmersDealProductDescriptiInner}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.farmersDealProductDescriptiChild}>
          <div className={styles.frameParent}>
            <div className={styles.frameParent}>
              <div className={styles.frameChild} />
              <div className={styles.component2frame5}>
                <div className={styles.cabbageIsAVersatileVegetabParent}>
                  <div className={styles.cabbageIsAContainer}>
                    {isInfo && (
                      <>
                        <p className={styles.farmNameSunny}>
                          Farm Name: Sunny Farms
                        </p>
                        <p className={styles.farmNameSunny}>
                          Succcessful Orders: 517
                        </p>
                      </>
                    )}
                    {isDesc && (
                      <>
                        <p className={styles.cabbageIsA}>
                          {product.description}
                        </p>
                      </>
                    )}
                  </div>
                  <button
                    className={styles.productDescription}
                    onClick={handleInfo}
                  >
                    Farmer Information
                  </button>
                  <button
                    className={styles.productSpecification}
                    onClick={handleDesc}
                  >
                    Product Description
                  </button>

                  {isInfo && <div className={styles.groupItem} />}
                  {isDesc && <div className={styles.groupItem1} />}
                </div>
              </div>
            </div>
            <div className={styles.minimumOrderQuantity100kgParent}>
              <div className={styles.minimumOrderQuantityContainer}>
                <span>{`Minimum Order Quantity: `}</span>
                <b>{product.minimum_order_quantity}</b>
              </div>
              <div className={styles.n180kg}>
                ₦{product.sale_price || product.regular_price}/kg
              </div>
              <div className={styles.groupInner} />
              <button
                className={styles.rectangleGroup}
                onClick={openAddToCart1}
              >
                <div className={styles.rectangleDiv} />

                <div className={styles.addToCart}>Add to cart</div>
              </button>
              <button className={styles.button} onClick={incrementCount}>
                +
              </button>
              <input
                className={styles.input}
                type="number"
                value={count}
                onChange={(e) => {
                  const value = e.target.value;
                  setCount1(isNaN(value) ? 0 : parseInt(value));
                }}
                onBlur={() => {
                  if (isNaN(count) || count === 0) {
                    setCount1(1);
                  }
                }}
                min="0"
              />

              <button className={styles.button1} onClick={decrementCount}>
                -
              </button>
              <div className={styles.lineDiv} />
              <img className={styles.groupIcon} alt="" src="/group-130.svg" />
            </div>
            <img
              className={styles.lettuceRemovebgPreview5Icon}
              alt=""
              src={productImage}
            />
            <div className={styles.lettuce}>{product.name}</div>
          </div>
        </div>
      </div>
      {isAddToCart1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeAddToCart1}
        >
          <AddToCart onClose={closeAddToCart1} />
        </PortalPopup>
      )}
    </>
  );
};

export default FarmersDealProductDescripti;
