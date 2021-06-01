import React from "react";
import "../styles.css";

function Thumbnail(props) {
  return (
    <div className="col-auto d-none d-md-block">
      <svg
        className="bd-placeholder-img"
        width="200"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="28%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg>
      {/* <div className="col-auto d-none d-md-block">
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <image href={props.imgURL} height="200" width="200" />
      </svg>
    </div> */}
    </div>
  );
}

export default Thumbnail;
