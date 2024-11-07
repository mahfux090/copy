import React, { useContext, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SportContext } from "../contexts/SportContext";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";

const LatestPosts = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const { posts } = useContext(SportContext);

  useEffect(() => {
    const post = posts.slice(0, 5);
    setLatestPosts(post);
  }, []);
  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-20">
      <Link
        to="/news"
        className="inline-flex items-center gap-3 text-3xl mb-10 cursor-pointer hover:text-red-700"
      >
        Latest News <FaArrowRightLong />
      </Link>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {latestPosts.map((item) => {
          return (
            <PostItem
              key={item.id}
              id={item.id}
              img={item.image}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestPosts;
