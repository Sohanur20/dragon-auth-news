/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const NewsCard = ({ newsCart }) => {
    const { title, image_url, details, rating, author,_id } = newsCart;

    return (
        <div>
            <div className="max-w-lg p-4 shadow-lg shadow-stone-600 rounded-lg m-5 dark:bg-gray-50 dark:text-gray-800 hover:bg-green-400">

                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image_url} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>6 min ago</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{title}</h3>
                        </a>
                        <h2 className="leading-snug dark:text-gray-600">
                            {
                                details.length > 200 ? <p>{details.slice(0, 200)}
                                <br />
                                <Link to={`/news/${_id}`} className="text-blue-500 font-bold btn">Read more ...</Link>
                                </p>

                                    :
                                    <p>{details}</p>


                            }
                        </h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;