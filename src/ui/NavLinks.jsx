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
        <button className="relative">
          <img src="./assets/cart.png" alt="Cart" />
          {addToCart.length > 0 && (
            <span
              className={`${pathname === "/" || pathname === "/home" ? "bg-purple-500 text-white" : "bg-gray-200 text-black"} absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded-full border border-white px-[6px] py-[1px] text-xs font-semibold`}
            >
              {addToCart.length}
            </span>
          )}
        </button>
        <button className="relative">
          <img src="./assets/wishlist.png" alt="Wishlist" />
          {wishlist.length > 0 && (
            <span
              className={`${pathname === "/" || pathname === "/home" ? "bg-purple-500 text-white" : "bg-gray-200 text-black"} absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded-full border border-white px-[6px] py-[1px] text-xs font-semibold`}
            >
              {wishlist.length}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default NavLinks;
