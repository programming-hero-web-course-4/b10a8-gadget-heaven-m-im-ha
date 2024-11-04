import { useContext } from "react";
import { ProductContext } from "../context/ProductsProvider";

function ProductDetails() {
  const { productDetails } = useContext(ProductContext);
  console.log(productDetails);
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
          <ol className="list-decimal ml-4">
            {productDetails.specification.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
        </div>
        <h4>Rating⭐</h4>
        <div className="flex gap-10">
          <button className="border border-green-300 px-2">Add to cart</button>
          <button className="border border-green-300 px-2">Wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
