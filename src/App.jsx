import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";
import Home from "./ui/Home";
import Dashboard from "./ui/Dashboard";
import Stats from "./ui/Stats";
import { ProductsProvider } from "./context/ProductsProvider";
import Contact from "./ui/Contact";
import Details from "./ui/Details";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/details/:productId",
        element: <Details/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

function App() {

  return (
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  );
}

export default App;
