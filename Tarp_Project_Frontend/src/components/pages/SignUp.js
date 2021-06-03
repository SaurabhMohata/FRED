import React ,{useState} from 'react';
import Footer from '../Footer.jsx';
import { Link } from 'react-router-dom';
import '../../App.css';

const API = async(url,method,obj = {}) =>{
  const res = await fetch('http://localhost:9000/webApi/'+ url,{
    method:method,
    headers: {
      'Content-Type': 'application/json'
     },
    body:JSON.stringify(obj)
  })
  const data = await res.json();
  console.log("data = ",data);
  return data;
}

function SignUp() {
 
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [stackoverflow, setStackoverflow] = useState("");
  const [avatar, setAvatar] = useState(null);



  function handleFullName(e){
    setFullName(e.target.value);
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handlePassword(e){
    setPassword(e.target.value);
  }

  function handleSelfDescription(e){
    setSelfDescription(e.target.value);
  }

  function handleGithub(e){
    setGithub(e.target.value);
  }

  function handleLinkedin(e){
    setLinkedin(e.target.value);
  }

  function handleStackoverflow(e){
    setStackoverflow(e.target.value);
  }

  function handleAvatar(e){
    setAvatar(e.target.value);
  }


  const handleEvent = async() => {
    // call api, if the user valid set status = 1 and redirect to home
    // get user profile url also
    const obj = {
      fullName,
      email,
      password,
      selfDescription,
      github,
      linkedin,
      stackoverflow
    }
    console.log(obj);
    // const res = await fetch('http://localhost:9000/webApi/signin/',{
    //   method:'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //    },
    //   body:JSON.stringify(obj)
    // })
    // const data = await res.json();
    // console.log("data = ",data);

    const randomdata =  await API('signup/','POST',obj);
    console.log("random data = ",randomdata);
    // setStatus(1);
  }

  return (
  <div>
  <form className="form-signin" action="/signup" method="post" encType="multipart/form-data">
    <h1 className="h4 mb-3 font-weight-normal">Create an Account</h1>
    <input onChange = {handleFullName} type="text" className="form-control top" placeholder="Username" id="fullName" name="fullName" value =  {fullName} required autoFocus/>
    <input onChange = {handleEmail} type="email" className="form-control middle" placeholder="Email" id="email" name="email" value = {email} required />
    <input onChange = {handlePassword} type="password" className="form-control middle" placeholder="Password" id = "password" name="password" value = {password} required />
    <input onChange = {handleSelfDescription} value = {selfDescription} type="text" className="form-control middle" placeholder="Self Description" id="selfDescription" name="selfDescription"/>
    <input onChange = {handleGithub} value = {github} type="text" className="form-control middle" placeholder="Github Account" id="github" name="github"/>
    <input onChange = {handleLinkedin} value = {linkedin} type="text" className="form-control middle" placeholder="Linkedin Account" id="linkedin" name="linkedin"/>
    <input onChange = {handleStackoverflow} value = {stackoverflow} type="text" className="form-control bottom" placeholder="Stackoverflow Account" id="stackoverflow" name="stackoverflow"/>
    <input onChange = {handleAvatar} value = {avatar} type="file" name = "avatar"/>
    <Link onClick = {handleEvent} className="btn btn-group btn-lg btn-dark btn-block" type="submit">Continue</Link>
    <small id="signInHelpBlock" className="form-text text-muted">
    <Link to="/sign-in">Already have an account?</Link>
    </small>
  </form>
  <p className="mt-5 mb-3 text-muted text-center">&copy; Fred</p>
  <Footer />
  </div>
  )
}

export default SignUp;