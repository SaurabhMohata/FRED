import React, { useState } from "react";
import "../styles.css";

function Description(course) {
  let initialUpvotes = course.upvotes;
  let initialReputation = course.reputation;
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [courseReputation, setCourseReputation] = useState(initialReputation);

  let userReputation = 20;

  function increase(event) {
    // first make an api call and check if the user has already voted
    // if he has do nothing
    // else increase the count in api and call this function
    setUpvotes(upvotes + 1);
  }

  function decrease(event) {
    // first make an api call and check if the user has already voted
    // if he has do nothing
    // else decrease the count in api and call this function
    setUpvotes(upvotes - 1);
  }

  function navigate() {
    window.location.href = course.courseURL;
  }

  function recommend() {
    // make an api call if not already recommended increase the course value
    // by user's reputation
    // console.log(courseReputation);
    console.log(
      "courseReputation: " +
        courseReputation +
        " userReputation: " +
        userReputation
    );
    setCourseReputation(courseReputation + userReputation);
  }

  return (
    /* mb - margin below, p padding*/
    <div className="col p-4 flex-column position-static">
      <strong className="d-inline-block mb-2 text-primary">
        {course.category}
      </strong>
      {course.status === 0 && (
        <strong className="status d-inline-block mb-2 text-danger">
          Not Approved
        </strong>
      )}
      <h3 onClick={navigate} className="mb-0 link">
        {course.name}
      </h3>
      <div className="mb-1 text-muted">{course.date}</div>
      <p className="card-text mb-1">{course.desc}</p>
      <div className="container-fluid">
        {course.status === 0 && (
          <button className="btn btn-outline-primary mt-2" onClick={recommend}>
            Recommend this!
          </button>
        )}
        {course.status === 1 && (
          <button className="submit-with-icon" onClick={increase}>
            <i className="icon1 fas fa-arrow-up"></i>
          </button>
        )}
        &nbsp;
        {course.status === 1 && (
          <button className="submit-with-icon" onClick={decrease}>
            <i className="icon2 fas fa-arrow-down"></i>
          </button>
        )}
        &nbsp; &nbsp;
        {course.status === 1 && (
          <span className="text-muted">{upvotes} upvotes</span>
        )}
      </div>
    </div>
  );
}

export default Description;
