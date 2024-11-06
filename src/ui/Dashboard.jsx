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
    const filteredItem = wishlist.filter(
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
      <div className="bg-Purple mt-12 py-12 text-center">
        <h3 className="text-xl font-semibold text-white">Dashboard</h3>
        <p className="mx-auto mt-3 max-w-3xl text-sm text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="mt-7 flex justify-center gap-6">
          <button
            className={
              isCart
                ? `text-Purple rounded-full bg-white px-8 py-2`
                : `rounded-full border border-white px-8 py-2 text-white`
            }
            onClick={() => setIsCart(true)}
          >
            Cart
          </button>
          <button
            className={
              isCart
                ? `rounded-full border border-white px-8 py-2 text-white`
                : `text-Purple rounded-full bg-white px-8 py-2`
            }
            onClick={() => setIsCart(false)}
          >
            Wishlist
          </button>
        </div>
      </div>
      {isCart ? (
        <div className="mx-10 mt-10 flex items-center justify-between">
          <h3 className="text-xl font-bold">Cart</h3>
          <div className="flex gap-8">
            <h4 className="text-xl font-bold">
              Total Cost : ${totalCost.toFixed(2)}
            </h4>
            <div className="flex gap-6">
              <button
                onClick={handleSortByPrice}
                className="border border-Purple rounded-full text-sm flex gap-1 justify-center items-center px-6 py-1"
              >
                <span>Sort by price</span>
                <img src="./assets/sort.png" alt="" />
              </button>
              <button
                disabled={addToCart.length > 0 ? false : true}
                onClick={handleOpenModal}
                className={
                  addToCart.length > 0
                    ? `bg-Purple px-6 py-1 rounded-full text-white`
                    : `bg-slate-600 px-6 py-1 rounded-full text-white`
                }
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-10 mx-10">
          <h3 className="text-xl font-bold">Wishlist</h3>
        </div>
      )}
      <div className="grid grid-cols-1">
        {isCart ? (
          addToCart.length > 0 &&
          addToCart.map((item) => (
            <div key={item.product_id} className="w-[60rem] mx-auto mt-10 border-2 p-4 border-slate-200 flex gap-10 items-center">
              <div>
                <img className="w-40" src={item.product_image} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold">{item.product_title}</h4>
                <p className="text-sm text-slate-700">{item.description}</p>
                <p className="text-sm text-slate-900 font-semibold">price : {item.price}</p>
              </div>
              <button className="ml-auto" onClick={() => handleDeleteCartItem(item)}>
                <img src="./assets/delete.png" alt="" />
              </button>
            </div>
          ))
        ) : wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item.product_id} className="w-[60rem] mx-auto mt-10 border-2 p-4 border-slate-200 flex gap-10 items-center">
              <div>
                <img className="w-40" src={item.product_image} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold">{item.product_title}</h4>
                <p className="text-sm text-slate-700">{item.description}</p>
                <p className="text-sm text-slate-900 font-semibold">price : {item.price}</p>
              </div>
              <button className="ml-auto" onClick={() => handleDeleteWishlistItem(item)}>
                <img src="./assets/delete.png" alt="" />
              </button>
            </div>
          ))
        ) : (
          <h1 className="mx-10">Add products for wishlist</h1>
        )}
      </div>
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
