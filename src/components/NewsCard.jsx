import { FaEye, FaStar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";


const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        total_view,
        rating,
    } = news;

    // Format date
    const formattedDate = new Date(author.published_date).toLocaleDateString(
        "en-GB",
        {
            day: "numeric",
            month: "short",
            year: "numeric",
        }
    );

    return (
        <div className="card bg-base-100 shadow-md rounded-xl">

            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-base-200 rounded-t-xl">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt="author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author.name}</h2>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                {/* optional icons */}
                <div className="flex gap-2 text-gray-500 text-lg">
                    <span><CiBookmark /></span>
                    <span><FaShareAlt /></span>
                </div>
            </div>

            {/* Body */}
            <div className="p-4">
                <h2 className="font-bold text-lg mb-3">{title}</h2>

                <img
                    src={thumbnail_url}
                    alt="news"
                    className="rounded-lg w-full h-52 object-cover mb-3"
                />

                <p className="text-sm text-gray-600">
                    {details.length > 150
                        ? details.slice(0, 150) + "..."
                        : details}
                    <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer ml-1">
                        Read More
                    </Link>
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 pb-4">

                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < rating.number ? "" : "opacity-30"} />
                    ))}
                    <span className="text-gray-700 ml-2">{rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;