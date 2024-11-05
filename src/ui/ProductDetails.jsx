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
    <div className="flex gap-10">
      <ToastContainer />
      <div>
        <img className="w-80" src={productDetails.product_image} alt="" />
      </div>
      <div>
        <h3>{productDetails.product_title}</h3>
        <p>price : ${productDetails.price}</p>
        <button className="rounded-xl border border-green-400 px-2">
          {productDetails.availability === true ? `In Stock` : `Out of stock`}
        </button>
        <p>{productDetails.description}</p>
        <div>
          <p>Specification :</p>
          <ol className="ml-4 list-decimal">
            {productDetails.specification.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>
        <h4>Rating⭐</h4>
        <div className="flex items-center gap-4">
          <ReactStars classNames="flex gap-1" {...stars} />
          <p>{productDetails.rating}</p>
        </div>
        <div className="flex gap-10">
          <button
            onClick={() => handleAddToCart(productDetails)}
            className="border border-green-300 px-2 flex gap-1 items-center justify-center"
          >
            <span>

            Add to cart
            </span>
            <img src="./assets/cart.png" alt="" />
          </button>
          <button
            disabled={isDisabled}
            onClick={() => handleWishlist(productDetails)}
            className={
              isDisabled
                ? `border border-green-300 bg-slate-300 px-2`
                : `border border-green-300 px-2`
            }
          >
            <img src="./assets/wishlist.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
