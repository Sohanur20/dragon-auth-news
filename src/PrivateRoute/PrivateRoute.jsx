/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvuder/AuthProvider";
import { Navigate ,useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {
const {user,loading} = useContext(AuthContext)
// console.log(user); 
const location = useLocation()
console.log(location.pathname);

if (loading) {
    return <span className="loading loading-bars loading-lg "></span>
}


if (user) {
    return children ;
}

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;