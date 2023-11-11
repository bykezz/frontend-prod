import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Description.module.css";
import ProductSpecification from "./ProductSpecification";
import Ratings from "./Ratings";
const Description = ({ product }) => {
  return (
    <>
      {isSpecificationOpen && <ProductSpecification />}
      {isRatingsOpen && <Ratings />}
    </>
  );
};

export default Description;
