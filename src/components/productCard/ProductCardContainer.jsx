import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductCardContainer.module.scss";

const ProductCardContainer = ({ product, color }) => {
  return (
    <div
      className={styles.product_card_container}
      style={{ background: color }}
    >
      <ProductCard product={product} />
    </div>
  );
};

export default ProductCardContainer;
