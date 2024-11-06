import { useContext, useEffect } from "react";
import ProductDetails from "./ProductDetails"
import { ProductContext } from "../context/ProductsProvider";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
    const { productDetails, setProductDetails } = useContext(ProductContext);
    const { productId } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      async function fetchProductDetails() {
        try {
          const response = await fetch("/assets/data/products.json");
          const data = await response.json();
          const product = data.products.find(
            (item) => item.product_id === parseInt(productId)
          );
          if (product) {
            setProductDetails(product);
          } else {
            navigate("/home");
          }
        } catch (error) {
          console.error("Failed to fetch product data:", error);
          navigate("/home");
        }
      }
  
      if (!productDetails || !Object.keys(productDetails).length) {
        fetchProductDetails();
      }
    }, [productId, productDetails, setProductDetails, navigate]);

    return (
        <div className="mt-10 mb-28">
            <div  className="bg-Purple">
                <h3 className="text-2xl text-center pt-6 text-white font-semibold">Product Details</h3>
                <p className="mt-2 max-w-3xl text-white text-center mx-auto pb-48">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="bg-gray-200 h-72"></div>
            <ProductDetails/>
        </div>
    )
}

export default Details
