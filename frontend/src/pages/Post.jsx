import React, { useContext, useEffect, useState } from "react";
import { SportContext } from "../contexts/SportContext";
import { useParams } from "react-router-dom";

const Post = () => {
  const { posts } = useContext(SportContext);
  const { postId } = useParams();
  const [post, setPost] = useState(false);

  useEffect(() => {
    setPost(posts.find((e) => e.id === Number(postId)));
  }, []);
  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col sm:flex-row gap-5 mt-12 mb-20">
      <img
        src={post.image}
        alt="post image"
        className="h-auto mx-auto w-[50%]"
      />

      <div>
        <p className="text-3xl font-semibold pb-4">{post.title}</p>
        <p className="text-sm">{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
