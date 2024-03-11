import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCardContainer from "./productCard/ProductCardContainer";
import styles from "./CardList.module.scss";
import BestSaleCard from "./bestSale/BestSaleCard";

const CardList = () => {
  const { data, isLoading } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (!data) return null;
  const colors = [
    "#FF8B64",
    "#55C2E6",
    "#FF5E7D",
    "#4BCF82",
    "#7335D2",
    "#F1C75B",
  ];
  let colorIndex = 0;
  return (
    <div className={`${styles.card_list_container}`}>
      <BestSaleCard />
      {data.map((product) => {
        colorIndex = colors.length == colorIndex ? 0 : colorIndex;
        return (
          <ProductCardContainer
            key={product.id}
            product={product}
            color={colors[colorIndex++]}
          />
        );
      })}
    </div>
  );
};

export default CardList;
