import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductsProvider";

function Dashboard() {
  const { addToCart, setAddToCart } = useContext(ProductContext);
  console.log(addToCart);

  function handleDeleteItem(item) {
    const filteredItem = addToCart.filter(
      (el) => el.product_id !== item.product_id,
    );
    setAddToCart(filteredItem);
  }

  const totalCost = addToCart.length > 0 ? addToCart.reduce((prev,cur)=>prev+cur.price,0) : 0;
  console.log(totalCost)



  return (
    <div>
      <div className="text-center">
        <h3>Dashboard</h3>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-10 justify-center">
          <button className="border border-pink-600 px-4 py-1">Cart</button>
          <button className="border border-pink-600 px-4 py-1">Wishlist</button>
        </div>
      </div>
      <div className="flex justify-between">
        <h3>Cart</h3>
        <div className="flex gap-8">
          <h4>Total Cost : ${totalCost}</h4>
          <div className="flex gap-6">
            <button className="border border-pink-400 px-3 py-1">Sort by price</button>
            <button className="border border-pink-400 px-3 py-1">Purchase</button>
          </div>
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
              <button onClick={() => handleDeleteItem(item)}>✖️</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
