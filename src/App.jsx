import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";
import Home from "./ui/Home";
import Dashboard from "./ui/Dashboard";
import Stats from "./ui/Stats";

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
          path : "/dashboard",
          element : <Dashboard/>
        },
        {
          path : "/stats",
          element : <Stats/>
        },
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App;
