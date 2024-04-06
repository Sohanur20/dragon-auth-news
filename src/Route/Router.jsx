import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Career from "../components/Career/Career";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NewsDetls from "../components/NewsDets/NewsDetls";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const Router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children : [

        {
            path : '/',
            element : <Home></Home>,
            loader : () => fetch('/news.json')
        },
        {
          path : '/news/:id',
          element :<PrivateRoute><NewsDetls></NewsDetls></PrivateRoute> 
        },
        {
          path : '/about',
          element :<About></About>
        },
        {
          path : '/career',
          element : <Career></Career>
        },
        {
          path :'/login',
          element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        }
      ]
    },
  ]);

  export default Router ;
  