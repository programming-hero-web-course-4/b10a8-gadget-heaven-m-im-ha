import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { addToCart, setAddToCart, wishlist, setWishlist } =
    useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  const [isCart, setIsCart] = useState(true);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  // console.log(modalRef);
  // console.log(addToCart);

  function handleOpenModal(e) {
    e.preventDefault();
    // console.log(`click`);
    setShowModal(true);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }

  function handleCloseModal() {
    setShowModal(false);
    setAddToCart([]);
    navigate("/");
  }

  function handleSortByPrice() {
    // console.log(`click`)
    const sortedItemByPrice =
      addToCart.length > 0 && [...addToCart].sort((a, b) => b.price - a.price);
    // console.log(sortedItemByPrice);
    setAddToCart(sortedItemByPrice);
  }

  function handleDeleteCartItem(item) {
    const filteredItem = addToCart.filter(
      (el) => el.product_id !== item.product_id,
    );
    setAddToCart(filteredItem);
  }
  function handleDeleteWishlistItem(item) {
    const filteredItem = addToCart.filter(
      (el) => el.product_id !== item.product_id,
    );
    setWishlist(filteredItem);
  }

  const totalCost =
    addToCart.length > 0
      ? addToCart.reduce((prev, cur) => prev + cur.price, 0)
      : 0;
  // console.log(totalCost);

  useEffect(() => {
    if (showModal && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [showModal]);

  return (
    <div>
      <div className="text-center">
        <h3>Dashboard</h3>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-10">
          <button
            className={`${isCart ? `bg-green-400` : ``} border border-pink-600 px-4 py-1`}
            onClick={() => setIsCart(true)}
          >
            Cart
          </button>
          <button
            className={`${isCart ? `` : `bg-green-400`} border border-pink-600 px-4 py-1`}
            onClick={() => setIsCart(false)}
          >
            Wishlist
          </button>
        </div>
      </div>
      {isCart ? (
        <div className="flex justify-between">
          <h3>Cart</h3>
          <div className="flex gap-8">
            <h4>Total Cost : ${totalCost.toFixed(2)}</h4>
            <div className="flex gap-6">
              <button
                onClick={handleSortByPrice}
                className="border border-pink-400 px-3 py-1"
              >
                Sort by price
              </button>
              <button
                onClick={handleOpenModal}
                className="border border-pink-400 px-3 py-1"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>Wishlist</h3>
        </div>
      )}
      <div className="grid grid-cols-1">
        {isCart ? (
          addToCart.length > 0 &&
          addToCart.map((item) => (
            <div key={item.product_id} className="flex gap-10">
              <div>
                <img className="w-40" src={item.product_image} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h4>{item.product_title}</h4>
                <p>{item.description}</p>
                <p>price : {item.price}</p>
              </div>
              <button onClick={() => handleDeleteCartItem(item)}>✖️</button>
            </div>
          ))
        ) : wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item.product_id} className="flex gap-10">
              <div>
                <img className="w-40" src={item.product_image} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h4>{item.product_title}</h4>
                <p>{item.description}</p>
                <p>price : {item.price}</p>
              </div>
              <button onClick={() => handleDeleteWishlistItem(item)}>✖️</button>
            </div>
          ))
        ) : (
          <h1>Add products for wishlist</h1>
        )}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {showModal && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          ref={modalRef}
        >
          <div className="modal-box flex flex-col items-center justify-center">
            <img src="/assets/Group.png" alt="" />
            <h3 className="text-lg font-bold">Payment Successfully</h3>
            <p className="py-2">Thanks for purchasing.</p>
            <p className="py-2">Total: {totalCost.toFixed(2)}</p>
            <div className="modal-action">
              <form className="w-full" method="dialog">
                <button onClick={handleCloseModal} className="btn">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Dashboard;
