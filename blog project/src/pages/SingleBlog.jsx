import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser, FaClock } from "react-icons/fa6";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="bg-black text-center text-white px-4 py-40">
        <h2 className="text-5xl lg:text-7xl font-bold mb-5 leading-snug">
          Single Blog Page
        </h2>
      </div>
      {/* blog details  */}
      <div className="max-w-7xl mx-auto my-12">
        <div className="lg: w-3/4 mx-auto">
          <div>
            <img src={image} alt="image" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            {" "}
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            {" "}
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div>
            <p className="text-base text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              vero, eum numquam corrupti laborum alias porro sit, temporibus
              dignissimos, necessitatibus itaque cumque modi quod dicta qui
              optio nam! Ipsum cumque maxime atque iure possimus, perspiciatis
              mollitia? Quas aliquid eligendi atque dicta numquam. Est harum
              illo doloribus esse molestias quasi commodi temporibus ratione
              eum, assumenda iusto ducimus, libero earum, molestiae dolor!
            </p>
            <p className="text-base text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              vero, eum numquam corrupti laborum alias porro sit, temporibus
              dignissimos, necessitatibus itaque cumque modi quod dicta qui
              optio nam! Ipsum cumque maxime atque iure possimus, perspiciatis
              mollitia? Quas aliquid eligendi atque dicta numquam. Est harum
              illo doloribus esse molestias quasi commodi temporibus ratione
              eum, assumenda iusto ducimus, libero earum, molestiae dolor!
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
