import Nav from "../Navber/Nav";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Slider from "../Slider/Slider";



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Nav></Nav>


            <div className="grid md:grid-cols-4 grid-cols-1 gap-10">

                <div className="border-2 border-gray-700">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="border-2 border-gray-700 col-span-2">
                    <h2 className="text-2xl">News comming soon</h2>
                </div>




                <div className="border-2 border-gray-700">
                    <RightSideNav></RightSideNav>
                </div>



            </div>



        </div>
    );
};

export default Home;