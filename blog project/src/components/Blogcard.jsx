import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Blogcard = ({ blogs, currentpage, pageSize, selectedCategory }) => {
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentpage - 1) * pageSize, currentpage * pageSize);
  console.log(filteredBlogs);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
          <div>
            <img src={blog.image} alt="" className="w-full" />
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
              {blog.title}
            </h3>
            <p className="mb-2 text-gray-600">
              <FaUser className="inline-flex items-center mr-2" />
              {blog.author}
            </p>
            <p className="text-gray-500 text-sm">
              Published:{blog.published_date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogcard;
