import React from "react";
import "../styles.css";

// function listItem(item) {
//   return (
//     <p className="sidepanel">
//       {" "}
//       <input type="checkbox" /> {item.val}{" "}
//     </p>
//   );
// }

function SidePanel(props) {
  function handleEvent(event) {
    // we have to call api with search parameters when it is checked
    console.log(event.target.name);
    console.log(event.target.checked);
  }

  const languageChangeEvent = (event) =>{
    // console.log(event.target.name);
    // console.log(event.target.checked);
    if(event.target.checked){
      //changestate
      // console.log("props = ",props.setLanguage);
      props.setLanguage(event.target.name)
    }else{
      props.setLanguage(null)
    }
  }


  const typeChangeEvent = (event) =>{
    // console.log("here")
    // console.log(event.target.name);
    // console.log(event.target.checked);
    if(event.target.checked){
      //changestate
      // console.log("props = ",props.setType);
      props.setType(event.target.name)
    }else{
      props.setType(null)
    }
  }

  const statusChangeEvent = (event) =>{
    // console.log("here")
    // console.log(event.target.name);
    // console.log("this is in the sidepanel = ",!event.target.checked);
    props.setStatus(!event.target.checked)
  }
  
  return (
    <div>
      <h3 className="sidepanel"> </h3>
      <p className="sidepanel">
        {" "}
        <input onChange={statusChangeEvent} name="unapproved" type="checkbox" checked={!props.status} />{" "}
        Unapproved Courses{" "}
      </p>
      <hr />
      
      {/* start for language */}

      <h3 className="sidepanel"> Languages </h3>
      <p className="sidepanel">
        {" "}
        <input
          onChange={languageChangeEvent}
          name="english"
          type="checkbox"
          checked={props.language === "english" ? true : false} 
        /> English{" "}
      </p>
      <p className="sidepanel">
        {" "}
        <input
          onChange={languageChangeEvent}
          name="espanol"
          type="checkbox"
          checked={props.language === "espanol" ? true : false} 
        /> Espanol{" "}
      </p>
      <p className="sidepanel">
        {" "}
        <input
          onChange={languageChangeEvent}
          name="chinese"
          type="checkbox"
          checked={props.language === "chinese" ? true : false} 
        /> Chinese{" "}
      </p>
      <hr />

    {/* end for langugage */}

    {/* type change start here */}

      <h3 className="sidepanel"> Content Type </h3>
      <p className="sidepanel">
        {" "}
        <input
          onChange={typeChangeEvent}
          name="courses"
          type="checkbox"
          checked={props.type === "courses" ? true : false} 
        /> Courses{" "}
      </p>
      <p className="sidepanel">
        {" "}
        <input
          onChange={typeChangeEvent}
          name="videos"
          type="checkbox"
          checked={props.type === "videos" ? true : false} 
        /> Videos{" "}
      </p>
      <p className="sidepanel">
        {" "}
        <input 
        onChange={typeChangeEvent} 
        name="blogs" 
        type="checkbox" 
        checked={props.type === "blogs" ? true : false} 
        /> Blogs{" "}
      </p>
      <hr />

      {/* type change end here */}
    </div>
  );
}

export default SidePanel;
