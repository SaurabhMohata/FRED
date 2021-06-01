import React, {useState, useEffect, useContext } from 'react';
import Footer from '../Footer.jsx';
import { Link ,Redirect} from 'react-router-dom';
import '../../App.css';
import {UserContext} from '../../userContext';


const API = async(url,method,obj = {}) =>{
  const res = await fetch('http://localhost:9000/webApi/'+ url,{
    method:method,
    headers: {
      'Content-Type': 'application/json'
     },
    body:JSON.stringify(obj)
  })
  const data = await res.json();
  // console.log("data = ",data);
  return data;
}

function SignIn(props) {
  const {userDetails,setUserDetail }= useContext(UserContext);
  console.log("hello baby again" , userDetails);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();

  const [status, setStatus] = useState(2);
  const [apiCall,setApiCall] = useState(false)



  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handlePassword(e){
    setPassword(e.target.value);
  }


  const handleEvent = async() => {
    // call api, if the user valid set status = 1 and redirect to home
    // get user profile url also
    const obj = {
      email,
      password
    }
    console.log(obj);

    const userData =  await API('signin/','POST',obj);
    console.log("user data = ",userData);

    const status = userData.Data;
    if(status === 0) setStatus(0);
    else {
      setStatus(1) 
      await setUserDetail(userData)
    }

    setApiCall(!apiCall)
    console.log(status);
  }

  useEffect(()=> {
      if(status === 0){
        alert("Username or Password is incorrect");
      }
      else if(status === 1){
        // window.location.href = '/home';
        // setUserDetail(userData)
        props.history.push({
          pathname:'/home',
            state:{userData:userData}
         });
      }
  }, [apiCall])


  /**
   * this will run only once when the screen renders for the first time 
  useEffect(()=>{
  },[])
  */

  return (
  <div>
  <form className="form-signin" action="/thanks" method="post">
    <h1 className="h4 mb-3 font-weight-normal">Welcome Back!</h1>
    <input onChange = {handleEmail} type="email" className="form-control top" placeholder="Email"name="email"  value = {email} required autoFocus/>
    <input onChange = {handlePassword} type="password" className="form-control bottom" placeholder="Password" name="password" value = {password} required />
    <Link onClick = {handleEvent} className="btn btn-group btn-lg btn-dark btn-block" type="submit">Sign in</Link>
    <small id="signInHelpBlock" className="form-text text-muted">
    Need an account?&nbsp;&nbsp;
    <Link to="/sign-up"> Register</Link>
    </small>
  </form>
  <p className="mt-5 mb-3 text-muted text-center">&copy; Fred</p>
  <Footer />
  </div>
  )
}

export default SignIn;