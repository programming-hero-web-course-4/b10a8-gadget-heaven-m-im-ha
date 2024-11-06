import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="mx-auto max-w-7xl font-sora">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
