import React ,{useEffect,useRef} from "react";
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import "./navbar.css";

function Navbar(props) {
  const RouteRef = useRef(null)
  let history = useHistory();
  console.log("getting props  = ",props.userDetails);
  useEffect(()=>{
    console.log("Inside useEffect of profile = ",props.userDetails);
  },[props])


const RedirectToProfile = ()=>{
  console.log("helooo here");
   history.push({
    pathname:'/profile',
    state:{userData:props.userDetails}
  });
}

const changeRoute = (route)=>{
  history.push({
    pathname:route, 
  });
}

  return (
    <nav class="navbar navbar-expand navbar-dark bg-dark sticky-top">
      <div class="navbar-brand" onClick={()=>changeRoute('/home')}>
        &nbsp; &nbsp; &nbsp; &nbsp; FRED &nbsp;
        <i className="fas fa-user-graduate"></i>
      </div>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav mr-auto">
          <li class="notsospecialitem nav-item active">
            <div class="nav-link" onClick={()=>changeRoute('/home')}>
              Home
            </div>
          </li>
          <li class="notsospecialitem nav-item">
            <div class="nav-link" onClick={()=>changeRoute('/userlist')}>
              Users
            </div>
          </li>
          <li class="notsospecialitem nav-item">
            <div class="nav-link" onClick={()=>changeRoute('/search')}>
              Search
            </div>
          </li>
          <li class="notsospecialitem nav-item">
            <div class="nav-link"  onClick={()=>changeRoute('/recommend')}>
              Recommend
            </div>
          </li>
          <li class="specialitem nav-item">
            <div class="nav-link">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a onClick={RedirectToProfile} class="dropdown-item"  >
                    ViewProfile
                  </a>
                  <a class="dropdown-item" href="./sign-in">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
