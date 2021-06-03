import React, {useState,useEffect,useContext} from "react";
import SidePanel from "./SidePanel";
import CourseCard from "./CourseCard";
import courses from "./courses";
import SearchBar from "./SearchBar";
import {API} from '../../../ApiSchema'
import {UserContext} from '../../../userContext';
import { Spinner } from "react-activity";
import "../styles.css";

//  It is very important to have a unique key for every list item so that react can trace changes.
// It isn't a prop though you can't access it. React uses it to order and efficiently render them.
// function createCard(course) {
//   return (
//     <CourseCard
//       key={course.key}
//       category={course.category}
//       name={course.name}
//       date={course.date}
//       desc={course.desc}
//       imgURL={course.imgURL}
//       status={course.status}
//       upvotes={course.upvotes}
//       courseURL={course.courseURL}
//       reputation={course.reputation}
//     />
//   );
// }

function App() {
  const [loading, setLoading] = useState(true);
  const [token,setToken] = useState(null);
  const [data, setData] = useState(null)
  /**
   * TO be passed to the child components
   */
  const [language,setLanguage] = useState(null);
  const [type,setType] = useState(null);
  const [tag,setTag] = useState("");
  const [status,setStatus] = useState(true);
  const [refetch,setRefetch] = useState(true)

  const {userDetails,setUserDetail}= useContext(UserContext);


  let getContentListing;

  const fetchData = async() =>{
    setLoading(true)
      const obj = {
        language,
        tag,
        status,
        type
      }
      getContentListing = await API('contentListing/','POST',obj,userDetails.Data[0].accessToken);
      if(getContentListing){       
        setLoading(false)
        setData(getContentListing.Data)
        // console.log("ContentListing = ", getContentListing.Data);
      }
  }

  useEffect(() => {
    // console.log("usercontext in Search  = ",userDetails.Data[0].accessToken);
    setToken(userDetails.Data[0].accessToken)
  },[])

  useEffect(()=>{
    console.log("Fetching data");
     fetchData();
  },[token,tag,language,status,type,refetch])


  // useEffect(()=>{
  //   console.log("language from parent component selected = ",language);
  // },[language])

  // useEffect(()=>{
  //   console.log("type from parent component selected = ",type);
  // },[type])

  // useEffect(()=>{
  //   console.log("status from parent component selected = ",status);
  // },[status])

  // useEffect(()=>{
  //   console.log("status from parent component selected = ",status);
  // },[status])


  if(loading === true) return (
    <div className="loading">
      <Spinner size={30}/>
    </div>
  )
  else{
  return (
    <div>
      <SearchBar           
        setTag = {(selectedTag)=>{
            setTag(selectedTag)
          }}/>
      <div className="side-panel">
        <hr />
        <SidePanel 
          language={language}
          type={type}
          status={status}
          setLanguage = {(selectedLanguage)=>{
            setLanguage(selectedLanguage)
          }}
          setType = {(selectedType)=>{
            setType(selectedType)
          }}
          setStatus = {(selectedStatus)=>{
            setStatus(selectedStatus)
          }}
        />
      </div>
      <div className="courses">
        {data && data.length > 0 ? data.map((course)=>{
          return (
            <CourseCard
            type={course.type}
            name={course.title}
            desc={course.description}
            upvotes={course.upvotes}
            courseURL={course.link}
            status={course.status}
            date = {course.courseDate}
            category = {course.category}
            id = {course._id}
            refetch={refetch}
            setRefetch = {(Refetch)=>{
              setRefetch(Refetch)
            }}
            />
          );
        })
      :
      <p> No such courses Available</p>
      }
      </div>
    </div>
  );
  }
}

export default App;
