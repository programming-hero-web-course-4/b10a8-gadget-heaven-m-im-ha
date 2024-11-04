import { useContext } from "react";
import { ProductContext } from "../context/ProductsProvider";

function Dashboard() {
  const { addToCart } = useContext(ProductContext);
  console.log(addToCart);

  return (
    <div>
      <div>
        <h3>Dashboard</h3>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-10">
          <button className="border border-pink-600 px-4 py-1">Cart</button>
          <button className="border border-pink-600 px-4 py-1">Wishlist</button>
        </div>
      </div>
      <div className="grid grid-cols-1">
        {addToCart.length > 0 &&
          addToCart.map((item) => (
            <div key={item.product_id} className="flex gap-10">
              <div>
                <img className="w-40" src={item.product_image} alt="" />
              </div>
              <div className="flex flex-col gap-6">
                <h4>{item.product_title}</h4>
                <p>{item.description}</p>
                <p>price : {item.price}</p>
              </div>
              <button>✖️</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
