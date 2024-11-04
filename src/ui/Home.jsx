import { useState } from "react";
import DisplayProducts from "./DisplayProducts";
import SideNav from "./SideNav";

function Home() {
    const [selectCategory,setSelectCategory] = useState("All Product");
    console.log(selectCategory);
  return (
    <div>
      <h3 className="text-center">Explore Cutting-Edge Gadgets</h3>
      <div className="mx-auto max-w-5xl flex gap-10">
        <SideNav onCategorySelect={setSelectCategory} />
        <DisplayProducts category={selectCategory} />
      </div>
    </div>
  );
}

export default Home;
