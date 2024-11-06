import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactStars from "react-rating-stars-component";

function ProductDetails() {
  const [isDisabled, setIsDisabled] = useState(false);
  const { productDetails, addToCart, setAddToCart, wishlist, setWishlist } =
    useContext(ProductContext);
  //   console.log(typeof productDetails);

  function handleAddToCart(product) {
    // console.log(product)
    if (!addToCart.some((item) => item.product_id === product.product_id)) {
      setAddToCart([...addToCart, product]);
      toast.success(`Congrats! you have added the product in the cart`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  function handleWishlist(product) {
    // console.log(product)
    if (!wishlist.some((item) => item.product_id === product.product_id)) {
      setWishlist([...wishlist, product]);
      setIsDisabled(true);
      toast.success(`Congrats! you have added the product in the wishlist`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const stars = {
    size: 18,
    count: 5,
    color: "black",
    activeColor: "yellow",
    value: productDetails.rating,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex gap-10 bg-white max-w-5xl p-4 rounded-2xl mx-auto -mt-[27rem]">
        <div>
          <img className="w-[22rem] h-[22rem] rounded-2xl" src={productDetails.product_image} alt="" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{productDetails.product_title}</h3>
          <p className="font-medium">price : ${productDetails.price}</p>
          <button className="mt-2 text-green-500 bg-green-100 rounded-xl border border-green-400 px-2 text-sm">
            {productDetails.availability === true ? `In Stock` : `Out of stock`}
          </button>
          <p className="text-sm mt-2 text-gray-500">{productDetails.description}</p>
          <div className="mt-3">
            <p className="font-bold">Specification :</p>
            <ol className="ml-4 list-decimal">
              {productDetails.specification.map((item, i) => (
                <li className="text-sm text-gray-500" key={i}>{item}</li>
              ))}
            </ol>
          </div>
          <h4 className="mt-2 font-bold">Rating⭐</h4>
          <div className="mt-2 flex items-center gap-4">
            <ReactStars classNames="flex gap-1" {...stars} />
            <p className="bg-gray-200 px-2 rounded-2xl text-sm">{productDetails.rating}</p>
          </div>
          <div className="flex gap-4 mt-3">
            <button
              onClick={() => handleAddToCart(productDetails)}
              className="flex items-center justify-center gap-1 bg-Purple text-white px-6 py-1 rounded-3xl"
            >
              <span className="text-sm">Add to Cart</span>
              <img src="./assets/cart-btn.png" alt="" />
            </button>
            <button
              disabled={isDisabled}
              onClick={() => handleWishlist(productDetails)}
              className={
                isDisabled
                  ? ` bg-slate-300 rounded-full`
                  : ``
              }
            >
              <img src="./assets/wishlist.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
