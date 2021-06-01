import React from "react";
// import Thumbnail from "./Thumbnail";
import Description from "./Description";
import "../styles.css";

function CourseCard(course) {
  return (
    <div className="col-md-12">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        {/* <Thumbnail imgURL={course.imgURL} /> */}
        <Description
          name={course.name}
          desc={course.desc}
          date={course.date}
          category={course.category}
          status={course.status}
          upvotes={course.upvotes}
          courseURL={course.courseURL}
          reputation={course.reputation}
        />
      </div>
    </div>
  );
}

export default CourseCard;
