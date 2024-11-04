import { Link } from "react-router-dom";

function SideNav({onCategorySelect}) {
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
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <ul className="min-h-auto menu w-64 bg-base-200 p-4 text-base-content">
            {categories.map((category) => (
              <li key={category}>
                <Link onClick={()=>onCategorySelect(category)}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
