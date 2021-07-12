import React, { useState, useContext } from "react";
import "../styles.css";
import {API} from '../../../ApiSchema';
import {UserContext} from '../../../userContext';
// import content from "../../../../../Tarp_Project_Backend/models/content";

function Description(course) {
  let initialUpvotes = course.upvotes;
  let initialReputation = course.reputation;
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [courseReputation, setCourseReputation] = useState(initialReputation);
  const {userDetails,setUserDetail}= useContext(UserContext);

  const handleVote = async(vote,contentId) =>{
    console.log(vote,contentId);
    const obj = {
      vote,
      contentId
    }
    const contentVote = await API('contentVote/','POST',obj,userDetails.Data[0].accessToken)
    course.setRefetch_(!course.refetch_)
  }
  
  function navigate() {
    window.location.href = course.courseURL;
  }


  const recommend = async(e) =>{
      const contentId = e.target.value;
      const obj = {
        contentId      
      }

      // console.log("content id description: ", contentId);
      // console.log("access token description: ", userDetails.Data[0].accessToken);
      
      const response = await API('reputationCount/','POST',obj,userDetails.Data[0].accessToken);
      course.setRefetch_(!course.refetch_)
  }

  return (
    /* mb - margin below, p padding*/
    <div className="col p-4 flex-column position-static">
      <strong className="d-inline-block mb-2 text-primary">
        {course.category}
      </strong>
      {!course.status && (
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
        {!course.status && (
          <button className="btn btn-outline-primary mt-2" onClick={recommend} value = {course.id}>
            Recommend this!
          </button>
        )}
        {course.status && (
          <button className="submit-with-icon" onClick={()=>handleVote('upvote',course.id)} value = {course.id}>
            <i className="icon1 fas fa-arrow-up"></i>
          </button>
        )}
        &nbsp;
        {course.status && (
          <button className="submit-with-icon" onClick={()=>handleVote('downvote',course.id)} value = {course.id}>
            <i className="icon2 fas fa-arrow-down"></i>
          </button>
        )}
        &nbsp; &nbsp;
        {course.status && (
          <span className="text-muted">{course.upvotes} upvotes</span>
        )}
      </div>
    </div>
  );
}

export default Description;
