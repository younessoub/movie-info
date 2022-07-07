import React from "react";
import { Link } from "react-router-dom";
import { Img } from "./Thumb.styles";

const Thumb = ({ title, image, movieId, clickable }) => {
  return (
    <div style={{}}>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Img src={image} alt={title} />
        </Link>
      ) : (
        <Img src={image} alt="movie-poster" />
      )}
    </div>
  );
};

export default Thumb;
