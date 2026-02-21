import React from "react";

const FilterSidebar = ({ filters, setFilters }) => {
  return (
    <aside className="w-full md:w-72 bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-6">
      {/* HEADER */}
      <h2 className="text-lg font-semibold text-gray-100">Filter News</h2>

      {/* DATE RANGE */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Date Range</label>
        <div className="flex gap-2">
          <input
            type="date"
            className="bg-gray-800 text-gray-300 rounded px-2 py-1 w-full"
            onChange={(e) =>
              setFilters({ ...filters, startDate: e.target.value })
            }
          />
          <input
            type="date"
            className="bg-gray-800 text-gray-300 rounded px-2 py-1 w-full"
            onChange={(e) =>
              setFilters({ ...filters, endDate: e.target.value })
            }
          />
        </div>
      </div>

      {/* AUTHOR */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Author / Creator</label>
        <input
          type="text"
          placeholder="Search author"
          className="bg-gray-800 text-gray-300 rounded px-3 py-2 w-full"
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
        />
      </div>

      {/* LANGUAGE */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Language</label>
        <select
          className="bg-gray-800 text-gray-300 rounded px-3 py-2 w-full"
          onChange={(e) => setFilters({ ...filters, language: e.target.value })}
        >
          <option value="">All</option>
          <option value="english">English</option>
          <option value="german">German</option>
          <option value="french">French</option>
        </select>
      </div>

      {/* COUNTRY */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Country</label>
        <select
          className="bg-gray-800 text-gray-300 rounded px-3 py-2 w-full"
          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
        >
          <option value="">All</option>
          <option value="greece">greece</option>
          <option value="spain">spain</option>
          <option value="france">france</option>
        </select>
      </div>

      {/* CATEGORY (MULTI SELECT) */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Category</label>
        <div className="flex flex-wrap gap-2">
          {["business", "technology", "sports"].map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: prev.category.includes(cat)
                    ? prev.category.filter((c) => c !== cat)
                    : [...prev.category, cat],
                }))
              }
              className={`px-3 py-1 rounded-full text-xs border ${
                filters.category.includes(cat)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-700 text-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT TYPE */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Content Type</label>
        <select
          className="bg-gray-800 text-gray-300 rounded px-3 py-2 w-full"
          onChange={(e) => setFilters({ ...filters, datatype: e.target.value })}
        >
          <option value="">All</option>
          <option value="news">News</option>
          <option value="blog">Blog</option>
          <option value="press release">Press Release</option>
          <option value="podcast">Podcast</option>
        </select>
      </div>

      {/* CLEAR FILTERS */}
      <button
        onClick={() =>
          setFilters({
            startDate: "",
            endDate: "",
            author: "",
            language: "",
            country: "",
            category: [],
            datatype: "",
          })
        }
        className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 rounded-lg transition"
      >
        Clear Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
