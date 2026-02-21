import React from "react";
import { FaArrowRight } from "react-icons/fa";
import NewsCard from "../Components/Cards/NewsCard";

const News = () => {
  return (
    <div className="py-8">
      {/* title */}
      <div>
        <p className="border-l-8 border-primary pl-4 text-2xl font-bold">
          All News
        </p>
      </div>

      {/* show all news here */}
      <section className="grid grid-cols-4 gap-4 mt-5">
        {[...Array(8)].map((article) => (
          <NewsCard article={article} />
        ))}
      </section>
    </div>
  );
};

export default News;
