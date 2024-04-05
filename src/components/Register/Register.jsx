import { Link } from "react-router-dom";
import Nav from "../Navber/Nav";
import { useContext } from "react";
import { AuthContext } from "../AuthProvuder/AuthProvider";
import { toast } from 'react-toastify';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) =>{

        e.preventDefault()
    
        const name = e.target.name.value ;
        const url = e.target.url.value ;
        // const photo = e.targe.photo.value ;
        const email = e.target.email.value ;
        const password = e.target.password.value ;
    
        console.log(name,url,email,password);

        createUser(email,password)
        .then( result =>{
            console.log(result.user);
            toast.success('register successfull')
            
        })
        .catch(error =>{
            console.log(error);
        })

    }

    return (
        <div>
            <Nav></Nav>
            <div className="lg:mt-44 shadow-2xl shadow-slate-700 w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-600">Register your account</h1>
                {/* Input fields and the form started */}


                <form onSubmit={handleRegister} action="" className="space-y-6">

                    <div className="space-y-2 text-sm">
                        <label htmlFor="username" className="block ">
                            Your name
                        </label>
                        <input type="text" name="name" id="" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>
                    

                    <div className="space-y-2 text-sm">
                        <label htmlFor="" className="block ">
                            Your Photo
                        </label>
                        <input type="text" name="url" id="" placeholder="url" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>

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
                 <input type="submit" value="Submit" className="btn btn-block btn-primary"/>
                </form>
             
                <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                    Do you have an account?
                  <Link to='/login'>
                  <button className="underline hover:text-indigo-600 font-bold">
                        Login
                    </button>
                  </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;