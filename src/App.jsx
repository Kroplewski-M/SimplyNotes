import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import EditNotes from './pages/EditNotes';
import { UserContext } from './userContext';
import { NotesContext } from './notesContext';
import { useState, useEffect } from 'react';
import { supabase} from './supabaseClient';
import { Route, Routes, useNavigate, useLocation  } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const location = useLocation();

  async function fetchUserInfo(ID){
    try{
        const { data, error } = await supabase
        .from('profiles')
        .select().eq('id',ID);
        if(error) throw error;
        else{
            console.log('user found:');
            setUser(data[0]);
            if(location.pathname == '/'){
              console.log('Redirecting...');
              navigate('/projects');
            }
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
        <NotesContext.Provider value ={{notes,setNotes}}>
            <Nav />
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/auth' element={<Auth />}/>
                    <Route path='/projects' element={<Projects />}/>
                    <Route path='/EditNotes/:id' element={<EditNotes />}/>
                  <Route path='/profile' element={<Profile />}/>
                  
              </Routes>
        </NotesContext.Provider>
        </UserContext.Provider>

    </div>
  )
}

export default App

