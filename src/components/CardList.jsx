import React from "react";
import { useProducts } from "../hooks/useProducts";

const CardList = () => {
  const { data, isLoading } = useProducts();
  if (!data) return null;
  return (
    <div>
      {data.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  );
};

export default CardList;
