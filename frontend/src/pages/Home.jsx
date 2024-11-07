import React from "react";
import Hero from "../components/Hero";
import Event from "../components/Event";
import LatestAlbums from "../components/LatestAlbums";
import LatestPosts from "../components/LatestPosts";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestPosts />
      <Event />
      <LatestAlbums />
    </div>
  );
};

export default Home;
