import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { useNavigate } from "react-router-dom";

function DisplayProducts({ category }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
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

  function handleProductDetails(product) {
    setProductDetails(product);
    setIsDetailsView(true);
    navigate(`/details/${product.product_id}`)
  }

  return (
    <div className="mb-10">
      {filteredProducts.length > 0 && (
        <div className="grid grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div className="p-4 rounded-lg border-2 border-slate-200" key={product.product_id}>
              <div className="w-full">
                <img
                  className=" mx-auto h-40 w-56"
                  src={product.product_image}
                  alt=""
                />
              </div>
              <h3 className="mt-2 font-semibold">{product.product_title}</h3>
              <p className="text-sm text-slate-700">price : ${product.price}</p>
              <button
                onClick={() => handleProductDetails(product)}
                className="mt-2 rounded-xl text-Purple text-sm font-semibold border border-Purple px-4 py-1"
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
