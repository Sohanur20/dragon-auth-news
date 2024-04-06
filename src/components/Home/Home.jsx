import Nav from "../Navber/Nav";
import NewsCard from "../NewsCard/NewsCard";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Slider from "../Slider/Slider";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const news = useLoaderData()
    // console.log(news);

    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Nav></Nav>


            <div className="grid md:grid-cols-4 grid-cols-1 gap-10">

                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="col-span-2">

                <h2 className="text-2xl font-bold text-black">Dragon News Home</h2>
                   {
                    news.map(newsCart => <NewsCard key={newsCart._id} newsCart={newsCart}></NewsCard>)
                   }
                </div>




                <div className="">
                    <RightSideNav></RightSideNav>
                </div>



            </div>



        </div>
    );
};

export default Home;