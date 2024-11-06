import { useContext, useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";
import SideNav from "./SideNav";
import { ProductContext } from "../context/ProductsProvider";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import Details from "./Details";
import Banner from "./Banner";

function Home() {
  const { isDetailsView, setIsDetailsView, selectCategory, setSelectCategory } =
    useContext(ProductContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" || pathname === "/home") {
      setIsDetailsView(false);
      setSelectCategory("All Product");
    }
  }, [pathname, setIsDetailsView]);

  return (
    <div>
      <div className="bg-Purple rounded-tl-none rounded-tr-none rounded-2xl">
        <Banner />
        <Hero />
      </div>
      <h3 className="text-center">Explore Cutting-Edge Gadgets</h3>
      {isDetailsView ? (
        <Details />
      ) : (
        <div className="mx-auto flex max-w-5xl gap-10">
          <SideNav onCategorySelect={setSelectCategory} />
          <DisplayProducts category={selectCategory} />
        </div>
      )}
    </div>
  );
}

export default Home;
