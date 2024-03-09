import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient("/products");

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => apiClient.getAllProducts(),
  });
};
