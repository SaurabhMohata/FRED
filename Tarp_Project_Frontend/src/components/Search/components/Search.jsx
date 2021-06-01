import React from "react";
import SidePanel from "./SidePanel";
import CourseCard from "./CourseCard";
import courses from "./courses";
import SearchBar from "./SearchBar";
import "../styles.css";

//  It is very important to have a unique key for every list item so that react can trace changes.
// It isn't a prop though you can't access it. React uses it to order and efficiently render them.
function createCard(course) {
  return (
    <CourseCard
      key={course.key}
      category={course.category}
      name={course.name}
      date={course.date}
      desc={course.desc}
      imgURL={course.imgURL}
      status={course.status}
      upvotes={course.upvotes}
      courseURL={course.courseURL}
      reputation={course.reputation}
    />
  );
}

function App() {
  return (
    <div>
      <SearchBar />
      <div className="side-panel">
        <hr />
        <SidePanel />
      </div>
      <div className="courses">{courses.map(createCard)}</div>
    </div>
  );
}

export default App;
