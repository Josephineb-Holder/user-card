import { useState } from 'react';
import { usersList } from './Users.jsx';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [user, setUser] = useState(' ');
  const userlist = usersList;

  function usergenerator() {
    const users = Math.floor(Math.random() * usersList.length);
    setUser(userlist[users]);
    console.log(user);
  }

  return (
    <>
      <div>
        <button onClick={usergenerator}> Click Me</button>

        <div className="users">
          <img src={user.image} alt="" />
          <p>{user.name}</p>
          <p>{user.position}</p>
          <p>{user.bio}</p>
          <p>{user.contact}</p>
        </div>
      </div>
    </>
  );
}

export default App;
