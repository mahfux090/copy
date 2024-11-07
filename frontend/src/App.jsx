import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Subscribe from "./pages/Subscribe";
import Auth from "./pages/Auth";
import Post from "./pages/Post";
import Footer from "./components/Footer";
import Posts from "./pages/Posts";
import Images from "./pages/Images";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:name" element={<Images />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
