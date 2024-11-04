function SideNav() {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="min-h-auto menu w-64 bg-base-200 p-4 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>All Product</a>
            </li>
            <li>
              <a>Laptops</a>
            </li>
            <li>
              <a>Phones</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
            <li>
              <a>MacBook</a>
            </li>
            <li>
              <a>Iphone</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
