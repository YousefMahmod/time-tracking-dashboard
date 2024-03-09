import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./productCard/ProductCard";
import ProductCardContainer from "./ProductCardContainer";

const CardList = () => {
  const { data, isLoading } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (!data) return null;
  console.log(data);
  return (
    <div>
      {data.map((product) => (
        <ProductCardContainer key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardList;
