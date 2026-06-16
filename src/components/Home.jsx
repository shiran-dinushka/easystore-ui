import PageHeading from "./PageHeading";
import  products  from "../data/products";
import ProductListing from "./ProductListing";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
      }, []);
      
  const fetchProducts = async () => {
    try {
      const response = await apiClient.get("/products");    
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading  title="Explore Eazy Stickers!">
          Add a touch of creativity to your space with our wide range of fun and
          unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}
