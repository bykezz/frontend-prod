import { useState, useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToCart from "./AddToCart";
import PortalPopup from "./PortalPopup";
import styles from "./ProductPopup1.module.css";
import axios from "axios";
import { useCartContext } from "../context/CartContext";
import { usePopupContext } from "../context/PopupContext";
import { useCartContext1 } from "../context/CartContext1";

const ProductPopup1 = ({ onClose, product, productImage }) => {
  const [count, setCount1] = useState(1);
  const [isDescriptionOpen, setDescription] = useState(true);
  const [isSpecificationOpen, setSpecification] = useState(false);
  const [isRatingsOpen, setRatings] = useState(false);
  const { cartId, setCartItems2, setTotal, setCount } = useCartContext1();

  const specificationHandler = () => {
    setSpecification(true);
    setDescription(false);
    setRatings(false);
  };
  const ratingsHandler = () => {
    setRatings(true);
    setDescription(false);
    setSpecification(false);
  };
  const descriptionHandler = () => {
    setSpecification(false);
    setDescription(true);
    setRatings(false);
  };

  const [isAddToCart1Open, setAddToCart1Open] = useState(false);

  const openAddToCart1 = useCallback(() => {
    setAddToCart1Open(true);
    document.body.style.overflow = "hidden";

    const data = {
      item_id: product.id,
      quantity: count,
    };

    axios
      .post(
        `http://13.53.125.166/carts/${cartId}/fjitems/`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        return axios.get(`http://13.53.125.166/carts/${cartId}/`);
      })
      .then((response) => {
        setCartItems2(response.data.farmjointitems);
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
      <div className={styles.redPepperPopUp}>
        <div className={styles.redPepperPopUpInner}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.redPepperPopUpChild}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <section className={styles.component2} id="product-description">
                <div className={styles.productDescription2}>
                  <button onClick={descriptionHandler}>
                    Product Description
                  </button>
                </div>
                <div className={styles.productSpecification2}>
                  <button onClick={specificationHandler}>
                    Product Specification
                  </button>
                </div>
                <div className={styles.productRatings2}>
                  <button onClick={ratingsHandler}>Product Ratings</button>
                </div>
                {isDescriptionOpen && <div className={styles.groupChild2} />}
                {isSpecificationOpen && <div className={styles.groupChild20} />}
                {isRatingsOpen && <div className={styles.groupChild30} />}
                {isDescriptionOpen && (
                  <div>
                    <div className={styles.cabbageIsAVersatileVegetabParent1}>
                      <div className={styles.cabbageIsAContainer1}>
                        <p className={styles.cabbageIsA1}>
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {isSpecificationOpen && (
                  <div className={styles.property1frame6}>
                    <div className={styles.size1012InchesInDiameterParent1}>
                      <div className={styles.size1012InchesContainer1}>
                        <ul className={styles.cabbageCanBeEatenRawInSa1}>
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Size: 10-12 inches in diameter</span>
                          </li>
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Weight: 2-3 pounds</span>
                          </li>
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Color: Green</span>
                          </li>
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Taste: Slightly sweet</span>
                          </li>
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Texture: Crisp, juicy</span>
                          </li>
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Storage: Refrigerate for up to 2 weeks</span>
                          </li>
                        </ul>
                        <p className={styles.cabbageIsA1}>&nbsp;</p>
                        <p className={styles.suggestedUses1}>
                          Nutritional Information:
                        </p>
                        <ul className={styles.cabbageCanBeEatenRawInSa1}>
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Calories: 25</span>
                          </li>
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Fat: 0 grams</span>
                          </li>
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Sodium: 10 milligrams</span>
                          </li>
                          1
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Carbohydrates: 5 grams</span>
                          </li>
                          <li className={styles.itCanAlsoBeCookedSuchAs1}>
                            <span>Fiber: 2 grams</span>
                          </li>
                          <li>
                            <span>Protein: 1 gram</span>
                          </li>
                        </ul>
                      </div>

                      <div className={styles.groupItem1} />
                    </div>
                  </div>
                )}
                {isRatingsOpen && (
                  <div className={styles.property1frame6}>
                    <div className={styles.thisCabbageIsPerfectForCoParent}>
                      <div className={styles.thisCabbageIsContainer1}>
                        <p className={styles.cabbageIsA}>
                          This cabbage is perfect for coleslaw! It's so crisp
                          and fresh, and the flavor is just right.
                        </p>
                        <p className={styles.cabbageIsA}>- Janet</p>
                      </div>
                      <img
                        className={styles.groupChild3}
                        alt=""
                        src="/group-131.svg"
                      />
                    </div>
                    <div className={styles.iLoveUsingThisCabbageInSParent}>
                      <div className={styles.thisCabbageIsContainer}>
                        <p className={styles.cabbageIsA}>
                          I love using this cabbage in stir-fries. It's so
                          versatile and easy to cook.
                        </p>
                        <p className={styles.cabbageIsA}>- Will</p>
                      </div>
                      <img
                        className={styles.groupChild3}
                        alt=""
                        src="/group-131.svg"
                      />
                      <div className={styles.iWasExpectingContainer}>
                        <p className={styles.cabbageIsA}>
                          I was expecting a bigger head of cabbage, but it's
                          still a good size. The flavor is good, and it's easy
                          to cook.
                        </p>
                        <p className={styles.cabbageIsA}>- Peter</p>
                      </div>
                      <img
                        className={styles.groupChild3}
                        alt=""
                        src="/group-132.svg"
                      />
                      <div className={styles.iWasAContainer}>
                        <p className={styles.cabbageIsA}>
                          I was a little disappointed with this cabbage. It
                          wasn't as crisp as I expected, and the flavor was a
                          little bland.
                        </p>
                        <p className={styles.cabbageIsA}>- David</p>
                      </div>
                      <img
                        className={styles.groupChild3}
                        alt=""
                        src="/group-132.svg"
                      />
                    </div>
                  </div>
                )}
              </section>
              <img
                className={styles.sweetRedPeppersCopy600x6Icon}
                alt=""
                src={productImage}
              />
            </div>
            <div className={styles.weight2kgParent}>
              <div className={styles.weight2kg}>
                <span>{`Available Quantity: `}</span>
                <b>{product.quantity}</b>
              </div>
              <div className={styles.n2000}>₦{product.price}</div>
              <div className={styles.rectangleDiv} />
              <button
                className={styles.rectangleGroup}
                onClick={openAddToCart1}
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
                    setCount1(isNaN(value) ? 0 : parseInt(value));
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

            <div className={styles.redPepper}>{product.name}</div>
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

export default ProductPopup1;
