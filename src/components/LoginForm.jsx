import { useState, useContext } from "react";
import { supabase} from '../supabaseClient';
import { UserContext } from "../userContext";
import { useNavigate  } from 'react-router-dom';


const LoginForm = ()=>{
  const navigate = useNavigate();

    const {user,setUser} = useContext(UserContext);

    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');

    const [EmailError, setEmailError] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);

    const [disableBtn,setDisableBtn] = useState(false);
    const [promtState, setPromtState] = useState('');
    const [promtBg,setPromtBg] = useState('bg-green-500');

    async function logInUser(){
        setDisableBtn(true);
        setPromtState('Logging in');
        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email: Email,
                password: Password,
              })
              if(error) throw error;
              else{
                  setUser(data.user);
                  fetchUserInfo();
              }
        }catch(error){
            console.log('error');
            setPromtBg('bg-red-700');
            setPromtState('Account not Found');
        }
    }
    async function fetchUserInfo(){
        try{
            const { data, error } = await supabase
            .from('profiles')
            .select().eq('id',user.id);
            if(error) throw error;
            else{
                setPromtState('Success! Redirecting...');
                setPromtBg('bg-green-600');
                setUser(data[0]);
                setTimeout(function() {
                    navigate('/projects');
                }, 1000);
                
            }
        }catch(error){
            console.log(error);
            setPromtBg('bg-red-700');
            setPromtState('Account not Found');
        }finally{
            setDisableBtn(false);
        }
    }
    const AuthForm = (event)=>{
        event.preventDefault();
        if(Email == ''){
            setEmailError(true);
        }else{
            setEmailError(false);
        }
        if(Password == ''){
            setPasswordError(true);
        }else{
            setPasswordError(false);
        }
        if(Email != '' && Password!= ''){
            logInUser();
        }
    }
return(
    <div>
        {
            promtState != ''?(
            <div className={`w-[300px] h-[40px] ${promtBg} absolute -top-[45px] rounded-md md:ml-[110px]`}>
                <p className="font-bold text-center mt-[7px]">{promtState}</p>
            </div>
            ):(
            <div></div>
            )
            }
        <form onSubmit={AuthForm} className="mt-5 w-[300px] md:w-[500px]  grid place-content-center items-center">
            <label htmlFor="email" className="font-semibold mr-[5px]">Email:</label>
            <input type="email" name="email" id="email" placeholder="JohnDoe@mail.com" onChange={(event)=> setEmail(event.target.value)}
             className={"w-[200px] rounded-md bg-gray-200 pl-[5px] mb-[10px] md:w-[250px] md:h-[30px]"+ (EmailError? 'border-solid border-2 border-red-700': '')}/>

            <label htmlFor="password" className="font-semibold mr-[5px]">Password:</label>
            <input type="password" name="password" id="password" onChange={(event)=> setPassword(event.target.value)}
            className={"w-[200px] rounded-md bg-gray-200 pl-[5px] mb-[10px] md:w-[250px] md:h-[30px]"+ (PasswordError? 'border-solid border-2 border-red-700': '')}/>

            <button disabled={disableBtn}
            className=" mt-10 w-[100%] h-[35px] md:h-[50px] rounded-md bg-[#333333] text-gray-200 hover:bg-gray-300 hover:text-[#333333] font-semibold">
            Login</button>
            <p className="text-center font-bold mt-5">Or</p>
        </form>
    </div>
)

}

export default LoginForm;

//ERROR -- LOGS USER IN SECOND TIME