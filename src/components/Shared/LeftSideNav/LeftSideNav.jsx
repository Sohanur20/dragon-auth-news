
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))



    }, [])

    return (
        <div>
            <h2 className="text-2xl font-bold p-2">All Caterogy </h2>

            <h2 className="text-2xl font-bold ml-5 m-6 bg-gray-300 p-4 rounded-lg">National News</h2>

            <div>
                {
                    categories.map(category => <Link
                        to={ `/category/${category.id}`}
                        key={category.id}
                        className="flex  mt-10 ml-10 font-bold"
                    >

                        {category.name}

                    </Link>)
                }
            </div>

        </div>
    );
};

export default LeftSideNav;