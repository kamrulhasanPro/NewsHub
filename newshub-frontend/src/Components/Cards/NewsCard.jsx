import React from "react";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { Link } from "react-router";

const NewsCard = ({ article }) => {
  const {
    _id,
    title,
    description,
    image_url,
    source_name,
    pubDate,
    category,
    article_id,
  } = article || {};

  const formattedDate = new Date(pubDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition duration-300 group">
      {/* Image */}
      {image_url && (
        <Link to={`/news/${_id}`}>
          <img
            src={image_url}
            alt={title}
            className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>
      )}

      <div className="p-4 space-y-3">
        {/* Category (only first one) */}
        {category?.[0] && (
          <span className="text-xs bg-blue-900/40 text-blue-400 px-2 py-1 rounded-full">
            {category[0]}
          </span>
        )}

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-100 line-clamp-2 group-hover:text-blue-400 transition">
          <Link to={`/news/${_id}`}>{title}</Link>
        </h2>

        {/* Short Description */}
        {description && (
          <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-800">
          <div className="flex items-center gap-3">
            {source_name && (
              <span className="flex items-center gap-1">
                <HiOutlineNewspaper />
                {source_name}
              </span>
            )}

            <span className="flex items-center gap-1">
              <FiCalendar />
              {formattedDate}
            </span>
          </div>

          <FiArrowRight className="group-hover:translate-x-1 transition" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
