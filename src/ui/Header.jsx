import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const {pathname}= useLocation();
  // console.log(x)

  return (
    <div className="flex justify-between">
      <NavLink to="/">Gadget Heaven</NavLink>
      <div className="flex gap-8">
        <NavLink className={pathname === "/home" ? `bg-green-600` : ``} to="/home">
          Home
        </NavLink>
        <NavLink  className={pathname === "/dashboard" ? `bg-green-600` : ``} to="/dashboard">Dashboard</NavLink>
        <NavLink  className={pathname === "/stats" ? `bg-green-600` : ``} to="/stats">Statistics</NavLink>
      </div>
      <div className="flex gap-4">
        <button>
          <Link  className={pathname === "/cart" ? `bg-green-600` : ``} to="/cart">Cart</Link>
        </button>
        <button>
          <Link  className={pathname === "/wishlist" ? `bg-green-600` : ``} to="/wishlist">WishList</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
