import { useState, useCallback } from "react";
import AreYouSure from "./AreYouSure";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./FarmersProducts.module.css";
import { useFarmerProfile } from "../context/FarmerProfileContext";

const FarmersProducts = ({ product, productImage }) => {
  const [isAreYouSureOpen, setAreYouSureOpen] = useState(false);
  const { id, setId } = useFarmerProfile();

  const navigate = useNavigate();

  const onEditClick = useCallback(
    (productId) => {
      setId(productId);
      navigate("/farmers-dashboard-edit-product");
    },
    [navigate]
  );

  const openAreYouSure = useCallback((productId) => {
    setId(productId);
    setAreYouSureOpen(true);
  }, []);

  const closeAreYouSure = useCallback(() => {
    setAreYouSureOpen(false);
  }, []);

  return (
    <>
      <div className={styles.farmersProductDetails}>
        <div className={styles.farmersProductDetailsChild} />
        <img
          className={styles.farmersProductDetailsItem}
          alt=""
          src={`http://127.0.0.1:8000${productImage}`}
        />
        <b className={styles.carrots}>{product.name}</b>
        {product.is_available === true ? (
          <div className={styles.inStock}>In stock</div>
        ) : (
          <div className={styles.outOfStock}>Out of Stock</div>
        )}
        <div className={styles.n1500}>
          ₦{product.sale_price || product.regular_price}
        </div>
        <div className={styles.vegetables}>{product.category_name}</div>
        <button
          className={styles.edit}
          onClick={() => {
            onEditClick(product.id);
          }}
        >
          Edit
        </button>
        <button
          className={styles.delete}
          onClick={() => {
            openAreYouSure(product.id);
          }}
        >
          Delete
        </button>
        <div className={styles.time}>{product.created_date}</div>
      </div>
      {isAreYouSureOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAreYouSure}
        >
          <AreYouSure id={id} onClose={closeAreYouSure} />
        </PortalPopup>
      )}
    </>
  );
};
export default FarmersProducts;
