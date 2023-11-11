import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./Description";
import Ratings from "./Ratings";
import styles from "./ProductSpecification.module.css";
const ProductSpecification = () => {
  const [isDescriptionOpen, setDescription] = useState(false);
  const [isSpecificationOpen, setSpecification] = useState(true);
  const [isRatingsOpen, setRatings] = useState(false);
  const descriptionHandler = () => {
    setSpecification(false);
    setDescription(true);
    setRatings(false);
  };
  const ratingsHandler = () => {
    setRatings(true);
    setDescription(false);
    setSpecification(false);
  };
  return (
    <>
      {isSpecificationOpen && (
        <div className={styles.property1frame6}>
          <div className={styles.size1012InchesInDiameterParent}>
            <div className={styles.size1012InchesContainer}>
              <ul className={styles.cabbageCanBeEatenRawInSa}>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Size: 10-12 inches in diameter</span>
                </li>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Weight: 2-3 pounds</span>
                </li>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Color: Green</span>
                </li>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Taste: Slightly sweet</span>
                </li>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Texture: Crisp, juicy</span>
                </li>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Storage: Refrigerate for up to 2 weeks</span>
                </li>
              </ul>
              <p className={styles.cabbageIsA}>&nbsp;</p>
              <p className={styles.suggestedUses}>Nutritional Information:</p>
              <ul className={styles.cabbageCanBeEatenRawInSa}>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Calories: 25</span>
                </li>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Fat: 0 grams</span>
                </li>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Sodium: 10 milligrams</span>
                </li>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Carbohydrates: 5 grams</span>
                </li>
                <li className={styles.itCanAlsoBeCookedSuchAs}>
                  <span>Fiber: 2 grams</span>
                </li>
                <li>
                  <span>Protein: 1 gram</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {isDescriptionOpen && <Description />}
      {isRatingsOpen && <Ratings />}
    </>
  );
};
export default ProductSpecification;
