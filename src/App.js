import React, { useState } from "react";
import AddUsers from "./Users/AddUsers";
import UserList from "./Users/UserList";

function App() {
  const [userList, setUserList] = useState([
    { username: "Carlos", age: "18", id: "exe1" },
    { username: "Gonzales", age: "30", id: "exe2" },
  ]);

  const userListHandler = (newUser) => {
    setUserList((prevUser) => {
      const updateUser = [...prevUser];
      updateUser.unshift({
        username: newUser.username,
        age: newUser.age,
        id: Math.random().toString,
      });
      return updateUser;
    });
  };

  return (
    <React.Fragment>
      <AddUsers userHandle={userListHandler}/>
      <UserList users={userList}/>
    </React.Fragment>
  );
}

export default App;
