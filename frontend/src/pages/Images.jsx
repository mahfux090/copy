import React, { useContext, useEffect, useState } from "react";
import { SportContext } from "../contexts/SportContext";
import { useParams } from "react-router-dom";

const Images = () => {
  const { albums } = useContext(SportContext);
  const { name } = useParams();
  const [image, setImage] = useState(null);
  useEffect(() => {
    const foundImage = albums.find((e) => e.name === name);
    setImage(foundImage);
  }, [albums, name]);
  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-5 mt-10 mb-20">
      <h1 className="text-3xl font-semibold text-center mb-10">
        {name} Images
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {image &&
          image.images &&
          image.images.map((item, index) => (
            <div key={index}>
              <img src={item} alt={`${name} ${index}`} className="h-full" />
              {console.log(item)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Images;
