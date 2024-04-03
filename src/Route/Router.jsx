import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";


const Router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children : [

        {
            path : '/',
            element : <Home></Home>
        }
      ]
    },
  ]);

  export default Router ;
  