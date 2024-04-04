import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import q1img from '../../../assets/qZone1.png'
import q2img from '../../../assets/qZone2.png'
import q3img from '../../../assets/qZone3.png'

const RightSideNav = () => {


    return (
        <div>

            {/* login */}
            <div>

                <h2 className="text-2xl font-bold p-2">login</h2>
                <button type="button" className="py-2 px-5  mt-2 mx-auto  shadow-lg border rounded-md border-black flex items-center gap-2 hover:scale-125">

                    <FaGoogle />
                    Continue with Google</button>

                <button type="button" className="py-2 px-5 m-4 mx-auto  shadow-lg border rounded-md border-black flex items-center gap-2 hover:scale-125">

                    <FaGithub />
                    Login with GitHub   .........</button>


                {/* Find Us On */}
                <h2 className="font-bold text-2xl mt-8 p-2">Find Us On</h2>

                <div className="border-2 border-gray-700 border-dashed p-4 rounded-lg space-y-3">

                    <button className="btn btn-outline w-52 hover:scale-125"><span className="text-2xl"><FaFacebook /></span> Facebook</button>

                    <button className="btn btn-outline w-52 hover:scale-125"><span className="text-2xl"><TiSocialTwitter /></span>Twitter</button>

                    <button className="btn btn-outline w-52 hover:scale-125"><span className="text-2xl"><SlSocialInstagram /></span> Instagram</button>

                </div>




            </div>




            <div className="bg-gray-400 rounded-lg">
                <h2 className="text-2xl font-bold p-2 m-8">Q-Zone</h2>
               <div className="space-y-5 p-4">
               <img src={q1img} alt="" />
                <img src={q2img} alt="" />
                <img src={q3img} alt="" />
               </div>

            </div>




        </div>
    );
};

export default RightSideNav;