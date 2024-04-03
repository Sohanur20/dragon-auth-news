import Marquee from "react-fast-marquee";


const Slider = () => {
    return (
        <div className=" flex p-4">
            <button className="btn btn-error text-white text-2xl">Latest</button>
            <Marquee pauseOnHover={true} className="cursor-pointer" speed={80}>
                <h2>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h2>

            </Marquee>


        </div>
    );
};

export default Slider;