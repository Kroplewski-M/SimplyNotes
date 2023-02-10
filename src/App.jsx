import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { UserContext } from './userContext';
import { useState, useEffect } from 'react';
import { supabase} from './supabaseClient';

function App() {
  const [user, setUser] = useState(null);
  
  async function fetchUserInfo(ID){
    try{
        const { data, error } = await supabase
        .from('profiles')
        .select().eq('id',ID);
        if(error) throw error;
        else{
            console.log('user found:');
            setUser(data[0]);
            console.log(data[0]);
        }
    }catch(error){
        console.log(error);
        console.log('user not found');
    }
}


useEffect(()=>{
  let cachedUser = localStorage.getItem('sb-dobsbmztmaegklphujhz-auth-token');
  if(cachedUser){
    const profile = JSON.parse(cachedUser);
    fetchUserInfo(profile.user.id);
  }else{
    console.log('not found cache');
  }
  },[])

  // useEffect(()=>{
  //   console.log('useEffect log:');
  //   console.log(user);
  // },[user])

  return (
    <div className="App">
      <UserContext.Provider value={{user,setUser}}>
      <Nav />
      <Home />
      {/* <Auth /> */}
      </UserContext.Provider>
    </div>
  )
}

export default App


//TO DO
//FETCH LOGGED IN USER WHEN RELOAD
//FETCH USER INFO FROM TABLE AND SET TO GLOBAL VAR
//SET GLOBAL VAR WITH USER INFO WHEN REGISTERED