import Nav from "../Navber/Nav";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";

const NewsDetls = () => {
    const { id } = useParams()
    console.log(id);

    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            new details
            <div className="grid grid-cols-4">

                <div className="col-span-3">

                    <p>{id}</p>

                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetls;