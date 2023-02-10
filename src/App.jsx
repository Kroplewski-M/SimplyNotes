import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { UserContext } from './userContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{user,setUser}}>
      <Nav />
      {/* <Home /> */}
      <Auth />
      </UserContext.Provider>
    </div>
  )
}

export default App


//TO DO
//FETCH LOGGED IN USER WHEN RELOAD
//FETCH USER INFO FROM TABLE AND SET TO GLOBAL VAR
//SET GLOBAL VAR WITH USER INFO WHEN REGISTERED