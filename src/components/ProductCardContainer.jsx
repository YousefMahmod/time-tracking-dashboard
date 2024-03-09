import React from "react";
import ProductCard from "./productCard/ProductCard";
import styles from "./ProductCardContainer.module.scss";

const ProductCardContainer = ({ product }) => {
  return (
    <div className={styles.product_card_container}>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductCardContainer;
