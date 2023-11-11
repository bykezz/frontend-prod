import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Ratings.module.css";
import Description from "./Description";
import ProductSpecification from "./ProductSpecification";
const Ratings = () => {
  const [isDescriptionOpen, setDescription] = useState(false);
  const [isSpecificationOpen, setSpecification] = useState(false);
  const [isRatingsOpen, setRatings] = useState(true);
  const descriptionHandler = () => {
    setSpecification(false);
    setDescription(true);
    setRatings(false);
  };
  const specificationHandler = () => {
    setRatings(false);
    setDescription(false);
    setSpecification(true);
  };
  return (
    <>
      {isRatingsOpen && (
        <div className={styles.property1frame7}>
          <div>
            <div className={styles.productDescription}>
              <button onClick={descriptionHandler}>Product Description</button>
            </div>
            <div className={styles.productSpecification}>
              <button onClick={specificationHandler}>
                Product Specification
              </button>
            </div>
            <div className={styles.productRatings}>Product Ratings</div>
            <div className={styles.groupInner} />
          </div>
          <div className={styles.thisCabbageIsPerfectForCoParent}>
            <div className={styles.thisCabbageIsContainer}>
              <p className={styles.cabbageIsA}>
                This cabbage is perfect for coleslaw! It's so crisp and fresh,
                and the flavor is just right.
              </p>
              <p className={styles.cabbageIsA}>- Janet</p>
            </div>
            <img className={styles.groupIcon} alt="" src="/group-131.svg" />
          </div>
          <div className={styles.iLoveUsingThisCabbageInSParent}>
            <div className={styles.thisCabbageIsContainer}>
              <p className={styles.cabbageIsA}>
                I love using this cabbage in stir-fries. It's so versatile and
                easy to cook.
              </p>
              <p className={styles.cabbageIsA}>- Will</p>
            </div>
            <img className={styles.groupChild1} alt="" src="/group-131.svg" />
            <div className={styles.iWasExpectingContainer}>
              <p className={styles.cabbageIsA}>
                I was expecting a bigger head of cabbage, but it's still a good
                size. The flavor is good, and it's easy to cook.
              </p>
              <p className={styles.cabbageIsA}>- Peter</p>
            </div>
            <img className={styles.groupChild2} alt="" src="/group-132.svg" />
            <div className={styles.iWasAContainer}>
              <p className={styles.cabbageIsA}>
                I was a little disappointed with this cabbage. It wasn't as
                crisp as I expected, and the flavor was a little bland.
              </p>
              <p className={styles.cabbageIsA}>- David</p>
            </div>
            <img className={styles.groupChild3} alt="" src="/group-132.svg" />
          </div>
        </div>
      )}
      {isSpecificationOpen && <ProductSpecification />}
      {isDescriptionOpen && <Description />}
    </>
  );
};
export default Ratings;
