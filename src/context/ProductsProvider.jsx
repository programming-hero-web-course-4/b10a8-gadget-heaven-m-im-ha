import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductsProvider({ children }) {
    const [selectCategory, setSelectCategory] = useState("All Product");
  const [productDetails, setProductDetails] = useState({});
  const [isDetailsView, setIsDetailsView] = useState(false);
  //   console.log(productDetails);

  return (
    <ProductContext.Provider
      value={{
        productDetails,
        setProductDetails,
        isDetailsView,
        setIsDetailsView,
        selectCategory, setSelectCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
