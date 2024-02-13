import React from "react";
import { useProducts } from "../context/ProductContext";

function ProductsPage(props) {
  const products = useProducts();
  console.log(products);
  return <div>product page</div>;
}

export default ProductsPage;
