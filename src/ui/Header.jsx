import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import Banner from "./Banner";

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
    <div>
      <NavLinks/>
    </div>
  );
}

export default Header;
