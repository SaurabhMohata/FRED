import React , {useState,useEffect,useContext} from "react";
import UserCard from "./UserCard";
import users from "./Users";
import SearchBar from "./SearchBar";
import {API} from '../../../ApiSchema'
import {UserContext} from '../../../userContext';
import { Dots } from "react-activity";


function UserList() {
  const [loading,setLoading] = useState(true);
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
      <div>
        <SearchBar />
        {data && data.length > 0 && data.map((user)=>{
          return (
            <UserCard
              key={user._id}
              img={"https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk_400x400.jpg" }
              name={user.fullName}
              reputation={user.reputation}
              profileURL={user.profileImg ? user.profileImg :"https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk_400x400.jpg"}
            />
          );
        })}
      </div>
    );
  }
}

export default UserList;
