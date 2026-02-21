import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import NewsCard from "../Components/Cards/NewsCard";
import FilterSidebar from "../Components/FilterSidebar";

const News = () => {
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    author: "",
    language: "",
    country: "",
    category: [],
    datatype: "",
  });
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2000/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data?.news));
  }, []);
  return (
    <div className="py-8">
      {/* title */}
      <div>
        <p className="border-l-8 border-primary pl-4 text-2xl font-bold">
          All News
        </p>
      </div>

      {/* show all news here */}
      <section className="flex">
        <div className="grid grid-cols-3 gap-4 mt-5 flex-4">
          {news.map((article, i) => (
            <NewsCard article={article} key={i} />
          ))}
        </div>
        <div className="flex-3">
          <FilterSidebar filters={filters} />
        </div>
      </section>
    </div>
  );
};

export default News;
