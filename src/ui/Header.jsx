import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between">
        <NavLink to="/">Gadget Heaven</NavLink>
        <div className="flex gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/stats">Statistics</NavLink>
        </div>
        <div className="flex gap-4">
            <button>cart</button><button>wishliast</button>
        </div>
    </div>
  );
}

export default Header;
