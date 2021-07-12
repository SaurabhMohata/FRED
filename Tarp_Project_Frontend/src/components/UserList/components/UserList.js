import React , {useState,useEffect,useContext} from "react";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import {API} from '../../../ApiSchema'
import {UserContext} from '../../../userContext';
import { Dots } from "react-activity";


function UserList() {
  const [loading, setLoading] = useState(true);
  const [token,setToken] = useState(null);
  const [data,setData] = useState(null)
  const {userDetails,setUserDetail }= useContext(UserContext);
  let getUserListing;
  useEffect(() => {
    console.log("usercontext in UserDetails  = ",userDetails.Data[0].accessToken);
    setToken(userDetails.Data[0].accessToken)
  },[])

  useEffect(()=>{
    const fetchData = async() =>{
      setLoading(true)
      getUserListing = await API('userListing/','POST',{},userDetails.Data[0].accessToken);
      if(getUserListing){       
      setLoading(false)
      setData(getUserListing.Data)
      console.log("userListing = ",getUserListing.Data);
      }
    }
     fetchData();
  },[token])

  if(loading === true) return <Dots />;
  else{
    return (
      <div className = "niche">
        {/* <SearchBar /> */}
        {data && data.length > 0 && data.map((user)=>{
          return (
            <UserCard
              completeUser = {user}
              authKey = {userDetails.Data[0].accessToken}
              id={user._id}
              img={"https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk_400x400.jpg" }
              name={user.fullName}
              reputation={user.reputation}
              profileURL={ user.profileImg ? "/images/" + user.profileImg.substring(15) : "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"}
            />
          );
        })}
      </div>
    );
  }
}

export default UserList;
