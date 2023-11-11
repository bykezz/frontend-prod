import { useState, useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToCart from "./AddToCart";
import PortalPopup from "./PortalPopup";
import Description from "./Description";
import styles from "./ProductPopup.module.css";
import { useCartContext } from "../context/CartContext";
import { usePopupContext } from "../context/PopupContext";

const ProductPopup = ({ onClose }) => {
  const [count, setCount] = useState(1);
  const { selectedProduct } = usePopupContext();
  const [isAddToCart1Open, setAddToCart1Open] = useState(false);
  const [total, setTotal] = useState(selectedProduct.price);

  const { addToCart, updateCartItemQuantity } = useCartContext();
  const { cartItems } = useCartContext();
  useEffect(() => {
    // Update the total whenever the count changes
    setTotal(selectedProduct.price.toLocaleString(undefined) * count);
  }, [count, selectedProduct.price]);

  const confirmAddToCart = () => {
    const newItem = {
      id: selectedProduct.itemId,
      name: selectedProduct.name,
      pricePerKg: selectedProduct.price,
      quantity: count,
      total: total,
      imageSrc: selectedProduct.imageSrc,
    };
    const existingItem = cartItems.find((item) => item.name === newItem.name);

    if (existingItem) {
      // Update the quantity and total of the existing item
      updateCartItemQuantity(
        existingItem.id,
        existingItem.quantity + newItem.quantity
      );
      setAddToCart1Open(true); // Close the popup after updating
    } else {
      console.log("Adding item:", newItem);
      addToCart(newItem);
      openAddToCart1(); // Close the popup after adding to cart
    }
  };

  const openAddToCart1 = useCallback(() => {
    setAddToCart1Open(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeAddToCart1 = useCallback(() => {
    setAddToCart1Open(false);
    document.body.style.overflow = "auto";
  }, [cartItems]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className={styles.redPepperPopUp}>
        <div className={styles.redPepperPopUpInner}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.redPepperPopUpChild}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <section className={styles.component2} id="product-description">
                <Description />
              </section>
              <img
                className={styles.sweetRedPeppersCopy600x6Icon}
                alt=""
                src={selectedProduct.imageSrc}
              />
            </div>
            <div className={styles.weight2kgParent}>
              <div className={styles.weight2kg}>
                <span>{`Weight: `}</span>
                <b>{selectedProduct.weight}Kg</b>
              </div>
              <div className={styles.n2000}>
                ₦{selectedProduct.price.toLocaleString(undefined)}
              </div>
              <div className={styles.rectangleDiv} />
              <button
                className={styles.rectangleGroup}
                onClick={confirmAddToCart}
              >
                <div className={styles.groupChild1} />
                <div className={styles.addToCart}>Add to cart</div>
              </button>
              <button className={styles.button} onClick={incrementCount}>
                +
              </button>
              <div className={styles.divi}>
                {" "}
                QTY:
                <input
                  className={styles.div}
                  type="number"
                  value={count}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCount(isNaN(value) ? 0 : parseInt(value));
                  }}
                  onBlur={() => {
                    if (isNaN(count) || count === 0) {
                      setCount(1);
                    }
                  }}
                  min="0"
                />
              </div>
              <button className={styles.button1} onClick={decrementCount}>
                -
              </button>
              <div className={styles.lineDiv} />
              <img className={styles.groupIcon} alt="" src="/group-1301.svg" />
            </div>
            <div className={styles.voluptasExpeditaFuga}>
              Voluptas expedita fuga accusamus provident.
            </div>
            <div className={styles.redPepper}>{selectedProduct.name}</div>
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

export default ProductPopup;
