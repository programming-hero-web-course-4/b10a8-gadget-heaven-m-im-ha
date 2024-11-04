import DisplayProducts from "./DisplayProducts";
import SideNav from "./SideNav";

function Home() {
  return (
    <div>
      <h3 className="text-center">Explore Cutting-Edge Gadgets</h3>
      <div className="mx-auto max-w-5xl flex gap-10">
        <SideNav />
        <DisplayProducts />
      </div>
    </div>
  );
}

export default Home;
