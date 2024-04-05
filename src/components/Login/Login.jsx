import { Link } from "react-router-dom";
import Nav from "../Navber/Nav";
import { useContext } from "react";
import { AuthContext } from "../AuthProvuder/AuthProvider";
import { toast } from 'react-toastify';

const Login = () => {


    const { signIn } = useContext(AuthContext)

    const handleLogin = (e) => {

        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        signIn(email,password)
        .then(result =>{
            console.log(result.user);
            toast.success('user login success')
        }

           
        )
        .catch(error =>{
            console.error(error);
        })



    }


    return (
        <>
            <Nav></Nav>

            <div className="lg:mt-44 w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto shadow-xl shadow-slate-700">
                <h1 className="text-3xl font-bold text-center text-indigo-600">Login your account</h1>
                {/* Input fields and the form started */}


                <form onSubmit={handleLogin} action="" className="space-y-6">

                    {/* <div className="space-y-2 text-sm">
                        <label htmlFor="username" className="block ">
                            Your name
                        </label>
                        <input type="text" name="name" id="" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div> */}

                    <div className="space-y-2 text-sm">
                        <label htmlFor="" className="block ">
                            Your Email
                        </label>
                        <input type="text" name="email" id="" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="password" className="block ">
                            Password
                        </label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        <div className="flex justify-end text-xs ">
                            <a href="#" className="hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    {/* Sign in Button */}
                    <input type="submit" value="Submit" className="btn btn-block btn-primary" />
                </form>

                <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                    Don&apos;t have an account?
                    <Link to='/register'>
                        <button className="underline hover:text-indigo-600 font-bold">
                            Register
                        </button>
                    </Link>
                </p>
            </div>

        </>

    );
};



export default Login;