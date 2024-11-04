import { useEffect, useState } from "react";

function DisplayProducts() {
  const [products, setProducts] = useState([]);
  //   console.log(products);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./assets/data/products.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div className="grid grid-cols-3 gap-10">
          {products.map((product) => (
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
              <button className="rounded-xl border border-green-300 px-4 py-1">
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
