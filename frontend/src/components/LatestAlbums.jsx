import React, { useContext, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SportContext } from "../contexts/SportContext";
import { Link } from "react-router-dom";
import AlbumItem from "./AlbumItem";

const LatestAlbums = () => {
  const [latestAlbums, setLatestAlbums] = useState([]);
  const { albums } = useContext(SportContext);

  useEffect(() => {
    const album = albums.slice(0, 5);
    setLatestAlbums(album);
  }, []);
  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] my-20">
      <Link
        to="/gallery"
        className="inline-flex items-center gap-3 text-3xl mb-10 cursor-pointer hover:text-red-700"
      >
        Latest Albums <FaArrowRightLong />
      </Link>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {latestAlbums.map((item) => {
          return (
            <AlbumItem
              key={item.id}
              id={item.id}
              img={item.images[0]}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestAlbums;
