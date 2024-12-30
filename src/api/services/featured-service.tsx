import { Product } from "@/types/product";
import axiosClient from "../axios-client";

export const fetchFeaturedProducts = async () => {
  const response = await axiosClient.get("/products?featured=true");
  const products = response.data.data;

  return products.map((product: Product) => ({
    title: product.attributes.title,
    price: product.attributes.price,
    image: product.attributes.image,
  }));
};
