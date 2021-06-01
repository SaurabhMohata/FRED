import React from 'react';
import Footer from '../Footer.jsx';
import { Link } from 'react-router-dom';
import '../../App.css';

function Recommend() {
    return (
    <div className = "text-center">
    <form className="form-signin" action="/thanks" method="post">
      <h1 className="h4 mb-3 font-weight-normal">Recommend Course</h1>
      <input type="text" className="form-control top" placeholder="Name" name="course-name" required autoFocus/>
      <input type="text" className="form-control middle" placeholder="Link" name="course-link" required />
      <input type="text" className="form-control middle" placeholder="Tags (comma separated)" name="course-tags" />
      <input type="text" className="form-control middle" placeholder="Language" name="course-lang" />
      <input type="text" className="form-control middle" placeholder="Type" name="course-type" />
      <input type="text" className="form-control bottom" placeholder="Description"name="course-desc"/>
      <Link to={'/thanks'} className="btn btn-group btn-lg btn-dark btn-block">Add this Course!</Link>
      <p className="mt-5 mb-3 text-muted">&copy; Fred</p>
    </form>
    <Footer />
    </div>
    )
}

// Course Name
// Course Link
// Course Description
// Course Category
// Course Tags
// Couse Duration
// Course Price
// Course Language
// Course Thumbnail ?? 
// Course Author*
// Course Prereq*
// Course Rating*
// Course Last Updated **
// 


// ** ->  for backend
// 

export default Recommend;