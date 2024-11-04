import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductsProvider({ children }) {
  const [selectCategory, setSelectCategory] = useState("All Product");
  const [productDetails, setProductDetails] = useState([]);
  const [isDetailsView, setIsDetailsView] = useState(false);
  const [addToCart, setAddToCart] = useState([]);
    console.log(addToCart);

  return (
    <ProductContext.Provider
      value={{
        productDetails,
        setProductDetails,
        isDetailsView,
        setIsDetailsView,
        selectCategory,
        setSelectCategory,
        addToCart,
        setAddToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
