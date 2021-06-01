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

  return (
    <div>
      <h3 className="sidepanel"> </h3>
      <p className="sidepanel">
        {" "}
        <input onChange={handleEvent} name="unapproved" type="checkbox" />{" "}
        Unapproved Courses{" "}
      </p>
      <hr />

      <h3 className="sidepanel"> Languages </h3>
      <p className="sidepanel">
        {" "}
        <input
          onChange={handleEvent}
          name="english"
          type="checkbox"
        /> English{" "}
      </p>
      <p className="sidepanel">
        {" "}
        <input
          onChange={handleEvent}
          name="espanol"
          type="checkbox"
        /> Espanol{" "}
      </p>
      <p className="sidepanel">
        {" "}
        <input
          onChange={handleEvent}
          name="chinese"
          type="checkbox"
        /> Chinese{" "}
      </p>
      <hr />

      <h3 className="sidepanel"> Content Type </h3>
      <p className="sidepanel">
        {" "}
        <input
          onChange={handleEvent}
          name="courses"
          type="checkbox"
        /> Courses{" "}
      </p>
      <p className="sidepanel">
        {" "}
        <input
          onChange={handleEvent}
          name="videos"
          type="checkbox"
        /> Videos{" "}
      </p>
      <p className="sidepanel">
        {" "}
        <input onChange={handleEvent} name="blogs" type="checkbox" /> Blogs{" "}
      </p>
      <hr />
    </div>
  );
}

export default SidePanel;
