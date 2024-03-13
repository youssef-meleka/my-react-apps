import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, Uage) =>{

    setUsersList((prevUsersList) => {

      return [...prevUsersList, {name: uName, age: Uage}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>

    </div>
  );
}

export default App;
