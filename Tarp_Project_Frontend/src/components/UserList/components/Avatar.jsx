import React from "react";
import "./Avatar.css";

function Avatar(props) {
  return (
    <div>
      <img className="circle-img" src={props.img} alt="avatar_img" />
    </div>
  );
}

export default Avatar;

/*   {<br />
      <i class="fab fa-stack-overflow fa-2x"></i> &nbsp;
      <i class="fab fa-github fa-2x"></i> &nbsp;
      <i class="fab fa-linkedin fa-2x"></i> &nbsp; }*/
