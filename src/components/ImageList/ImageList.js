import React from "react";

const ImageList = (props) => {
  return (
    <div>
      {props.imagesData.map((img) => {
        return <img key={img.id} alt={img.alt} src={img.urls.small} />;
      })}
    </div>
  );
};

export default ImageList;
