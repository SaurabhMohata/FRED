import React from "react";
import { useHistory } from 'react-router-dom';
import Avatar from "./Avatar";
import "./UserCard.css";

function UserCard(user) {
  let history = useHistory()

  // function navigate() {
  //   // redirect to user.profileURL
  //   window.location.href = user.profileURL;
  // }

  const navigate = () =>{
    history.push({
      pathname:`/user/${user.id}`,
      state:{userData:user.completeUser,authKey:user.authKey}
    })
  }

  return (
    <div className="light card col-md-12 mb-5 me-2">
      <div className="row g-0 overflow-hidden flex-md-row h-md-250 position-relative">
        <div onClick={navigate} className="col p-4 flex-column position-static">
          <Avatar img={user.profileURL} />
          <h3 className="mb-0">{user.name}</h3>
          <div className="mb-1 text-dark">
            Reputation: <span class="text-danger">{user.reputation}</span>
          </div>
          <i class="fab fa-stack-overflow fa-1x"></i> &nbsp;
          <i class="fab fa-github fa-1x"></i> &nbsp;
          <i class="fab fa-linkedin fa-1x"></i> &nbsp;
        </div>
      </div>
    </div>
  );
}

export default UserCard;
