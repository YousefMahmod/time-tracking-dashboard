import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCardContainer from "./productCard/ProductCardContainer";
import styles from "./CardList.module.scss";

const CardList = () => {
  const { data, isLoading } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (!data) return null;

  return (
    <div className={`flex_row_global ${styles.card_list_container}`}>
      {data.map((product) => (
        <ProductCardContainer key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardList;
