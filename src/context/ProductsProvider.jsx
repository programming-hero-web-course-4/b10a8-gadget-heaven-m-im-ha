import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductsProvider({ children }) {
  const [selectCategory, setSelectCategory] = useState("All Product");
  const [productDetails, setProductDetails] = useState({});
  const [isDetailsView, setIsDetailsView] = useState(false);
  const [addToCart, setAddToCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  // const [rating, setRating] = useState(0);
  // console.log(addToCart);
  console.log(wishlist);

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
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
