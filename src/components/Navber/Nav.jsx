import { NavLink } from "react-router-dom";
import users from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvuder/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {



    const { user, logOut } = useContext(AuthContext);

    const navlink = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>


    </>



    const handleLogOut = () => {

        logOut()
            .then(
                toast.success("Log out successfull")
            )
            .catch()
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}


                        </ul>

                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navlink}

                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <img className="w-12" src={users} alt="" />


                    {
                        user ?
                            <button onClick={handleLogOut} className="btn btn-success text-white">Sign Out</button>
                            :
                            <NavLink to='/login'>
                                <button className="btn btn-success text-white">Login</button>
                            </NavLink>
                    }
                    {/* <NavLink to='/login'>
                        <button className="btn btn-success text-white">Login</button>
                    </NavLink> */}
                </div>
            </div>
        </div>
    );
};

export default Nav;