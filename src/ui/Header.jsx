import { useContext, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductsProvider";

function Header() {
  const { pathname } = useLocation();
  const { setSelectCategory, setIsDetailsView,addToCart,wishlist } = useContext(ProductContext);

  function handleLogoClick() {
    setSelectCategory("All Product");
    setIsDetailsView(false);
  }

  useEffect(() => {
    const updateTitle = () => {
      const newTitle = `${pathname.slice(1)} | Gadget Heaven`;
      document.title = newTitle;
    };

    updateTitle();
  }, [pathname]);

  return (
    <div className="bg-purple-400">
      <nav className="flex justify-between">
        <NavLink onClick={handleLogoClick} to="/">
          Gadget Heaven
        </NavLink>
        <div className="flex gap-8">
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
        <div className="flex gap-4">
          <button>
            <img src="./assets/cart.png" alt="" />
            <p className={`${addToCart.length === 0 ? "" : `absolute z-10 -mt-10 text-green-700 font-bold ml-8 rounded-full border border-pink-600 px-[4px]`}`}>
              {addToCart.length === 0 ? "": addToCart.length}
            </p>
          </button>
          <button>
            <img src="./assets/wishlist.png" alt="" />
            <p className={`${wishlist.length === 0 ? "" : `absolute z-10 -mt-10 text-green-700 font-bold ml-8 rounded-full border border-pink-600 px-[4px]`}`}>
              {wishlist.length === 0 ? "": wishlist.length}
            </p>
          </button>
        </div>
      </nav>
      <div className="flex flex-col justify-center">
        <h2 className="text-center">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button>Shop Now</button>
      </div>
      <div>
        <img
          className="mx-auto max-h-96 max-w-3xl"
          src="/assets/banner.jpg"
          alt="banner img"
        />
      </div>
    </div>
  );
}

export default Header;
