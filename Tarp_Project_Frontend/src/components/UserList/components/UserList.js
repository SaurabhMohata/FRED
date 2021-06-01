import React from "react";
import UserCard from "./UserCard";
import users from "./Users";
import SearchBar from "./SearchBar";

function createCard(user) {
  return (
    <UserCard
      key={user.key}
      img={user.img}
      name={user.name}
      reputation={user.reputation}
      profileURL={user.profileURL}
    />
  );
}

function App() {
  return (
    <div>
      <SearchBar />
      {users.map(createCard)}
    </div>
  );
}

export default App;
