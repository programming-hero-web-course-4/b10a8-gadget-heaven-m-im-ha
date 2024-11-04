import { useContext } from "react";
import { ProductContext } from "../context/ProductsProvider";

function ProductDetails() {
  const { productDetails, addToCart, setAddToCart } =
    useContext(ProductContext);
  //   console.log(typeof productDetails);

  function handleAddToCart(product) {
    // console.log(product)
    if (!addToCart.some((item) => item.product_id === product.product_id)) {
      setAddToCart([...addToCart, product]);
    }
  }

  return (
    <div className="flex gap-10">
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
        <div className="flex gap-10">
          <button
            onClick={() => handleAddToCart(productDetails)}
            className="border border-green-300 px-2"
          >
            Add to cart
          </button>
          <button
            onClick={() => handleWishlist(productDetails)}
            className="border border-green-300 px-2"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
