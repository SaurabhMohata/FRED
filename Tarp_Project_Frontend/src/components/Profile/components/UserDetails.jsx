import React, { useState, useEffect } from "react";
import "./UserDetails.css";
import "../styles.css";
import {API} from "../../../ApiSchema";

function UserDetails(user) {
  console.log("Inside Userdetails: ", user)
  const [reputation, setReputation] = useState(0);
  const auth = user.authKey;
  const userId = user.id;

  const increaseReputation = async() => {
    const obj = {
      userId
    }
    console.log(obj);
    console.log("key value in API call: ", auth);
    const serverResponse =  await API('userUpvote/','POST',obj, auth);
    if(serverResponse.Data === 1) setReputation(reputation  + 1);
  }

  return (
    <div className="box mt-5 mb-5">
      <div className="col px-2 py-2">
        <div className="row px-4 py-3 ">
          <div className="row img pl-3">
            <div className="bg-black shadow rounded overflow-hidden">
              <div className="">
                <div className="px-3 pt-2 pb-5 mb-1 cover">
                  <div className="row media align-items-end profile-head">
                    <div className="col-3 profile display picture">
                      <img
                        src={user.imgURL}
                        alt="..."
                        width="200"
                        className="rounded mb-3 img-thumbnail"
                      />
                    </div>
                    <div className="col-2 pt-1 pb-4 ml-0 username ">
                      <div className="name text-white">
                        <h4 className="mt-0 mb-0 ml-0">{user.name}</h4>
                        <p className="small mb-4">
                          <a
                            href="mailto: Keshavssgarg@gmail.com"
                            className="text-white"
                          >
                            <i className="mail far fa-envelope-open"></i>
                          </a>
                          {" : "}
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 bg-light d-flex justify-content-end text-center">
                <div className="icons">
                  <a href={user.stackoverflow} className="text-dark">
                    <i className="iconn1 fab fa-stack-overflow fa-2x"></i>
                  </a>
                  &nbsp; &nbsp;
                  <a href={user.github} className="text-dark">
                    <i className="iconn2 fab fa-github fa-2x"></i>
                  </a>
                  &nbsp; &nbsp;
                  <a href={user.linkedin} className="text-dark">
                    <i className="iconn3 fab fa-linkedin fa-2x"></i>
                  </a>
                </div>
                <ul className="list-inline mb-1">
                  <li className="list-inline-item px-5">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {user.dateJoined}
                    </h5>
                    <small className="text-muted">
                      <i className="fas mr-1"></i>Joined
                    </small>
                  </li>
                  <li className="list-inline-item py-2 px-2">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {reputation}
                    </h5>
                    <small className="text-muted">
                      <button
                        onClick={increaseReputation}
                        className="submit-with-icon"
                      >
                        <i className="plusicon fas fa-plus"></i>
                      </button>
                      &nbsp;
                      <i className="fas mr-2"></i>Reputation
                    </small>
                  </li>
                </ul>
              </div>

              <div className="px-4">
                <h5 className="mb-0">Description</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                  <p className="font-italic mb-0">{user.selfDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
