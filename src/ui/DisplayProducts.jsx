import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { useNavigate } from "react-router-dom";

function DisplayProducts({ category }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  //   console.log(products);
  const { setProductDetails, setIsDetailsView } = useContext(ProductContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./assets/data/products.json");
        const data = await response.json();
        // console.log(data)
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const filteredProducts =
    category === "All Product"
      ? products
      : products.filter((product) => product.category === category);

  //   console.log(filteredProducts);

  function handleProductDetails(product) {
    setProductDetails(product);
    setIsDetailsView(true);
    navigate("/details")
  }

  return (
    <div>
      {filteredProducts.length > 0 && (
        <div className="grid grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div className="" key={product.product_id}>
              <div className="w-full">
                <img
                  className="mx-auto h-40 w-56"
                  src={product.product_image}
                  alt=""
                />
              </div>
              <h3>{product.product_title}</h3>
              <p>price : {product.price}</p>
              <button
                onClick={() => handleProductDetails(product)}
                className="rounded-xl border border-green-300 px-4 py-1"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DisplayProducts;
