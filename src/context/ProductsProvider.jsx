import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductsProvider({ children }) {
  const [productDetails, setProductDetails] = useState([]);

  return (
    <ProductContext.Provider value={{ productDetails }}>
      {children}
    </ProductContext.Provider>
  );
}
