import React, {useState, useEffect} from 'react';
import Footer from '../Footer.jsx';
import { Link } from 'react-router-dom';
import '../../App.css';
import {API} from '../../ApiSchema';

function Recommend(props) {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [tags, setTags] = useState("");
    const [language, setLanguage] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [key, setKey] = useState(null);
    const [category, setCategory] = useState("");

    console.log("object recieved in recommend", props);

    useEffect(()=>{
        setKey(props.location.state.userData.Data[0].accessToken);
      },[])

    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleLink(e){
        setLink(e.target.value);
    }

    function handleTags(e){
        setTags(e.target.value);
    }
    
    function handleLanguage(e){
        setLanguage(e.target.value);
    }

    function handleType(e){
        setType(e.target.value);
    }

    function handleDescription(e){
        setDescription(e.target.value);
    }

    function handleCategory(e){
        setCategory(e.target.value);
    }

    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    const handleSubmit = async() => {
      const courseDate = month[d.getMonth()] + " " + d.getFullYear();
      const obj = {
        title,
        link,
        tags,
        language,
        type,
        description,
        category,
        courseDate
      }
      console.log(obj);
  
      const serverResponse =  await API('suggestion/','POST',obj, key);
    }

    return (
    <div className = "text-center">
    <form className="form-signin" action="/thanks" method="post">
      <h1 className="h4 mb-3 font-weight-normal">Recommend Course</h1>
      <input onChange = {handleTitle} value = {title} type="text" className="form-control top" placeholder="Name" name="title" required autoFocus/>
      <input onChange = {handleLink} value = {link} type="text" className="form-control middle" placeholder="Link" name="link" required />
      <input onChange = {handleCategory} value = {category} type="text" className="form-control middle" placeholder="Category" name="category" />
      <input onChange = {handleTags} value = {tags} type="text" className="form-control middle" placeholder="Tags (comma separated)" name="tags" />
      <input onChange = {handleLanguage} value = {language} type="text" className="form-control middle" placeholder="Language" name="language" />
      <input onChange = {handleType} value = {type} type="text" className="form-control middle" placeholder="Type" name="type" />
      <input onChange = {handleDescription} value = {description} type="text" className="form-control bottom" placeholder="Description"name="description"/>
      <Link onClick = {handleSubmit} className="btn btn-group btn-lg btn-dark btn-block">Add this Course!</Link>
      <p className="mt-5 mb-3 text-muted">&copy; Fred</p>
    </form>
    <Footer />
    </div>
    )
}

export default Recommend;