import React from "react";
import UserDetails from "./UserDetails";
import "../styles.css";

function UserProfile(user) {
  return (
    <UserDetails
      email={user.email}
      name={user.name}
      dateJoined={user.dateJoined}
      selfDescription={user.selfDescription}
      reputation={user.reputation}
      linkedin={user.linkedin}
      github={user.github}
      stackoverflow={user.stackoverflow}
      imgURL={user.imgURL}
    />
  );
}

export default UserProfile;
