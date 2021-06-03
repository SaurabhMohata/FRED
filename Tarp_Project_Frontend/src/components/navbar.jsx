import React ,{useEffect} from "react";
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import "./navbar.css";

function Navbar(props) {
  let history = useHistory();

  console.log("getting props in navbar = ",props.userDetails);
  useEffect(()=>{
    console.log("Inside useEffect of navbar = ",props.userDetails);
  },[props])


const RedirectToProfile = ()=>{
  console.log("Inside Navbar :: profile clicked");
  console.log(props.userDetails);
   history.push({
    pathname:'/profile',
    state:{userData:props.userDetails}
  });
}

const RedirectToRecommend = ()=>{
  console.log("Inside Navbar :: recommend clicked");
  console.log(props.userDetails);
   history.push({
    pathname:'/recommend',
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
            <div class="nav-link"  onClick={RedirectToRecommend}>
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
                  <div onClick={RedirectToProfile} class="dropdown-item"  >
                    ViewProfile
                  </div>
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
