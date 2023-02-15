import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Projects from './pages/projects';
import { UserContext } from './userContext';
import { useState, useEffect } from 'react';
import { supabase} from './supabaseClient';
import { Route, Routes, useNavigate  } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
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
            console.log('Redirecting...');
            navigate('/projects');
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



  return (
    <div className="App">
        <UserContext.Provider value={{user,setUser}}>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/auth' element={<Auth />}/>
            <Route path='/projects' element={<Projects />}/>
          </Routes>
        </UserContext.Provider>
    </div>
  )
}

export default App

