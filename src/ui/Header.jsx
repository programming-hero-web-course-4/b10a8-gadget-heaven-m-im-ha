import { useContext, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductsProvider";

function Header() {
  const { pathname } = useLocation();
  const { setSelectCategory,setIsDetailsView} = useContext(ProductContext);
  
  function handleLogoClick(){
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
        <NavLink onClick={handleLogoClick} to="/">Gadget Heaven</NavLink>
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
            <Link
              className={pathname === "/cart" ? `bg-green-600` : ``}
              to="/cart"
            >
              Cart
            </Link>
          </button>
          <button>
            <Link
              className={pathname === "/wishlist" ? `bg-green-600` : ``}
              to="/wishlist"
            >
              WishList
            </Link>
          </button>
        </div>
      </nav>
      <div className="flex flex-col justify-center">
        <h2 className="text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
        <p className="text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <button>Shop Now</button>
      </div>
      <div>
        <img className="max-w-3xl max-h-96 mx-auto" src="/assets/banner.jpg" alt="banner img" />
      </div>
    </div>
  );
}

export default Header;
