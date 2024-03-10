import React from "react";
import styles from "./ProductCard.module.scss";
const ProductCard = ({ product }) => {
  const limitText = 80;
  const productTitle =
    product.title.length > limitText
      ? product.title.slice(0, limitText) + "..."
      : product.title;
  return (
    <div className={styles.card_container}>
      <div className={styles.card_title}>
        <h2 className="fx_18_500">{product.category}</h2>
        <div>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
      <div className={styles.card_body}>
        <p className="fx_39_500">{product.price}$</p>
        <div className={styles.card_sub_body}>
          <span className={`${styles.product_title} fx_12_400 mr_4`}>
            {productTitle}
          </span>
          <span className={`${styles.store_details} fx_12_500`}>
            InStore {product.rating.count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
