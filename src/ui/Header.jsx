import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import Banner from "./Banner";
import Hero from "./Hero";

function Header() {
  const { pathname } = useLocation();

  useEffect(() => {
    const updateTitle = () => {
      const newTitle = `${pathname.slice(1)} | Gadget Heaven`;
      document.title = newTitle;
    };

    updateTitle();
  }, [pathname]);

  return (
    <div className="bg-Purple mt-5 rounded-2xl">
      <NavLinks/>
      <Banner/>
    </div>
  );
}

export default Header;
