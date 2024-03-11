import React, { useEffect, useState } from "react";
import Blogcard from "./Blogcard";
import Pagination from "./Pagination";
import Category from "./Category";

const BlogPages = () => {
  const [blogs, setblogs] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const pageSize = 12; //blog per page
  const [selectedCategory, setselectedCategory] = useState(null);
  const [activeCategory, setactiveCategory] = useState(null);
  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page={currentPage}&limit=${pageSize}`;
      //filter my category
      if (selectedCategory) {
        url = `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setblogs(data);
    }
    fetchBlogs();
  }, [currentpage, pageSize, selectedCategory]);
  //page changing btn
  const handlePageChange = (pageNum) => {
    setcurrentpage(pageNum);
  };
  const handleCategoryChange = (category) => {
    setselectedCategory(category);
    setcurrentpage(1);
    setactiveCategory(category);
  };
  return (
    <div>
      {/* Category section        */}
      <div>
        <Category
          onselectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* blog card  section  */}

      <div className="flex flex-col lg:flex-row gap-12">
        <Blogcard
          blogs={blogs}
          currentpage={currentpage}
          selectedCatg={selectedCategory}
          pageSize={pageSize}
        />
      </div>

      {/* pagination section  */}
      <div>
        <Pagination
          onpagechange={handlePageChange}
          currentpage={currentpage}
          blogs={blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPages;
