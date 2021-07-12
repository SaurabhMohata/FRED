import React from "react";
// import Thumbnail from "./Thumbnail";
import Description from "./Description";
import "../styles.css";

function CourseCard(props) {
  
  return (
    <div className="col-md-12">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        {/* <Thumbnail imgURL={props.imgURL} /> */}
        <Description
          name={props.name}
          desc={props.desc}
          type={props.type}
          category = {props.category}
          status={props.status}
          upvotes={props.upvotes}
          courseURL={props.courseURL}
          date = {props.date}
          id = {props.id}
          refetch_={props.refetch}
          setRefetch_ = {(refetch)=>{
            props.setRefetch(refetch)
          }}
        />
      </div>
    </div>
  );
}

export default CourseCard;
