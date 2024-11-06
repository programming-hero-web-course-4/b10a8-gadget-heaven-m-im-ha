import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductsProvider";

function SideNav() {
  const { selectCategory, setSelectCategory } = useContext(ProductContext);
  const categories = [
    "All Product",
    "Laptop",
    "Phone",
    "Accessories",
    "MacBook",
    "iPhone",
  ];
  return (
    <div>
      <ul className="min-h-auto w-56 rounded-lg bg-gray-100 p-4 text-gray-500">
        {categories.map((category) => (
          <li
            key={category}
            className={`mb-5 rounded-lg ${selectCategory === category ? "bg-Purple text-white pl-4 py-2" : "bg-slate-200 pl-4 py-2"}`}
          >
            <Link onClick={() => setSelectCategory(category)}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
