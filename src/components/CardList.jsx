import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./productCard/ProductCard";

const CardList = () => {
  const { data, isLoading } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (!data) return null;
  console.log(data);
  return (
    <div>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardList;
