import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import {UserContext} from '../userContext';

function HeroSection(props) {
  const {userDetails,setUserDetail }= useContext(UserContext);
  let history = useHistory();
  
  console.log("Navbar = ",userDetails);

  const RedirectToRecommend = ()=>{
    console.log("Inside Recommend");
     history.push({
      pathname:'/recommend',
      state:{userData: userDetails}
    });
    console.log("1", userDetails);
  }

  const RedirectToSearch = () => {
    console.log("Inside Search")
    history.push({
      pathname: '/search',
      state: {userData: userDetails}
    });
    console.log("2", userDetails);
  }

  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>By the Learners, For the Learners</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <button
          className="btn btns btn--outline btn--large btn-mobile"
          onClick={RedirectToSearch}
        >
          SEARCH
        </button>
        <button
          className="btn btns btn--primary btn--large btn-mobile"
          onClick={RedirectToRecommend}
        >
          RECOMMEND <i className="fas fa-user-edit"></i>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
