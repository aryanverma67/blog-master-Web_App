import React from "react";

const Category = ({ onselectCategory, activeCategory }) => {
  const Categories = ["Startups", "Security", "AI", "Apps", "Tech"];

  return (
    <div  className="px-4 mb-8 lg:space-x-16 flx flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
      <button
        className={`lg:ml-12  ${activeCategory ? "" : "active-button"}`}
        onClick={() => onselectCategory(null)}
      >
        All
      </button>
      {
      Categories.map((category) => (
        <button
          onClick={() => onselectCategory(category)}
          className={`mr-2 space-x-16 ${
            activeCategory === category ? "active-button" : ""
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
