import React from "react";
import UserDetails from "./UserDetails";
import "../styles.css";

function UserProfile(user) {
  console.log("object recieved in user profile", user);

  return (
    <UserDetails
      id = {user.id}
      email={user.email}
      name={user.name}
      dateJoined={user.dateJoined}
      selfDescription={user.selfDescription}
      reputation={user.reputation}
      linkedin={user.linkedin}
      github={user.github}
      stackoverflow={user.stackoverflow}
      imgURL={user.imgURL}
      authKey = {user.authKey}
    />
  );
}

export default UserProfile;
