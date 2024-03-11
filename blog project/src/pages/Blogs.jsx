import React from "react";
import BlogPages from "../components/BlogPages";

const Blogs = () => {
  return (
    <div>
      <div className="bg-black text-center text-white px-4 py-40">
        <h2 className="text-5xl lg:text-7xl font-bold mb-5 leading-snug">Blog,s Page
        </h2>
      </div>
      {/* all blog,s container */}
      <div className="max-w-7xl mx-auto">
        <BlogPages/>

      </div>

    </div>
  );
};

export default Blogs;
