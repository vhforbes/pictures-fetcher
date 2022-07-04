import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ imagesData }) => {
  return (
    <div className="image-list">
      {imagesData.map(({ id, description, urls }) => {
        return <ImageCard key={id} description={description} urls={urls} />;
      })}
    </div>
  );
};

export default ImageList;
