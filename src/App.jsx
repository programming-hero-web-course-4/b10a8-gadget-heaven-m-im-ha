import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";
import Home from "./ui/Home";
import Dashboard from "./ui/Dashboard";
import Stats from "./ui/Stats";
import Cart from "./ui/Cart";
import Wishlist from "./ui/Wishlist";

function App() {
  const router = createBrowserRouter([
    {
      element : <AppLayout/>,
      errorElement : <ErrorPage/>,
      children : [
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/home",
          element : <Home/>
        },
        {
          path : "/dashboard",
          element : <Dashboard/>
        },
        {
          path : "/stats",
          element : <Stats/>
        },
        {
          path : "/cart",
          element : <Cart/>
        },
        {
          path : "/wishlist",
          element : <Wishlist/>
        },
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App;
