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
    <nav
      className={
        pathname === "/" || pathname === "/home"
          ? "bg-Purple mt-5 flex items-center justify-between rounded-2xl rounded-bl-none rounded-br-none px-10 pt-5"
          : "mt-5 flex items-center justify-between px-10 pt-5"
      }
    >
      <NavLink
        className={
          pathname === "/" || pathname === "/home"
            ? "text-xl text-white"
            : "text-xl font-bold text-black"
        }
        onClick={handleLogoClick}
        to="/"
      >
        Gadget Heaven
      </NavLink>
      <div
        className={
          pathname === "/" || pathname === "/home"
            ? "flex gap-8 text-sm text-white/90"
            : "flex gap-8 text-sm text-black/70"
        }
      >
        <NavLink
          className={
            pathname === "/home" ? `h-6 border-b-2 border-white/70` : ``
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={
            pathname === "/dashboard" ? `h-6 border-b-2 border-black/70` : ``
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={
            pathname === "/stats" ? `h-6 border-b-2 border-black/70` : ``
          }
          to="/stats"
        >
          Statistics
        </NavLink>
        <NavLink
          className={
            pathname === "/contact" ? `h-6 border-b-2 border-black/70` : ``
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </div>
      <div className="flex gap-6">
        <button>
          <img src="./assets/cart.png" alt="" />
          <p
            className={`${addToCart.length === 0 ? "" : `border-greeborder-green-300 absolute z-10 -mt-14 ml-7 rounded-full border px-[8px] font-semibold text-white`}`}
          >
            {addToCart.length === 0 ? "" : addToCart.length}
          </p>
        </button>
        <button>
          <img src="./assets/wishlist.png" alt="" />
          <p
            className={`${wishlist.length === 0 ? "" : `absolute z-10 -mt-14 ml-7 rounded-full border border-green-300 px-[8px] font-semibold text-white`}`}
          >
            {wishlist.length === 0 ? "" : wishlist.length}
          </p>
        </button>
      </div>
    </nav>
  );
}

export default NavLinks;
