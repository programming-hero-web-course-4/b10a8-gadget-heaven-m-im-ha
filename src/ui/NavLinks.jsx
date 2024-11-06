import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductsProvider";

function NavLinks() {
  const { pathname } = useLocation();
  const { setSelectCategory, setIsDetailsView, addToCart, wishlist } =
    useContext(ProductContext);

  function handleLogoClick() {
    setSelectCategory("All Product");
    setIsDetailsView(false);
  }

  return (
    <nav className="flex justify-between mx-10 pt-10">
      <NavLink className="text-xl text-white" onClick={handleLogoClick} to="/">
        Gadget Heaven
      </NavLink>
      <div className="flex gap-8 text-sm text-white/90">
        <NavLink
          className={pathname === "/home" ? `bg-green-600` : ``}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={pathname === "/dashboard" ? `bg-green-600` : ``}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={pathname === "/stats" ? `bg-green-600` : ``}
          to="/stats"
        >
          Statistics
        </NavLink>
        <NavLink
          className={pathname === "/contact" ? `bg-green-600` : ``}
          to="/contact"
        >
          Contact Us
        </NavLink>
      </div>
      <div className="flex gap-6">
        <button>
          <img src="./assets/cart.png" alt="" />
          <p
            className={`${addToCart.length === 0 ? "" : `absolute z-10 -mt-14 ml-7 rounded-full border border-greeborder-green-300 px-[8px] font-semibold text-white`}`}
          >
            {addToCart.length === 0 ? "" : addToCart.length}
          </p>
        </button>
        <button>
          <img src="./assets/wishlist.png" alt="" />
          <p
            className={`${wishlist.length === 0 ? "" : `absolute z-10 -mt-14 ml-7 rounded-full border border-green-300  px-[8px] font-semibold text-white`}`}
          >
            {wishlist.length === 0 ? "" : wishlist.length}
          </p>
        </button>
      </div>
    </nav>
  );
}

export default NavLinks;
