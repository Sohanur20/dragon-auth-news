import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Career from "../components/Career/Career";


const Router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children : [

        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/about',
          element :<About></About>
        },
        {
          path : '/career',
          element : <Career></Career>
        }
      ]
    },
  ]);

  export default Router ;
  