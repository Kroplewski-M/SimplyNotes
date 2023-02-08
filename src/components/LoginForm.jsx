import { useState } from "react";


const LoginForm = ()=>{
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');

    const [EmailError, setEmailError] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);

    const [disableBtn,setDisableBtn] = useState(false);
    const [promtState, setPromtState] = useState('');
    const [promtBg,setPromtBg] = useState('bg-green-500');

    function logInUser(){
        console.log('loggin in ');
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
        <form onSubmit={AuthForm} className="mt-5 w-[300px] md:w-[500px]  grid place-content-center items-center">
            <label htmlFor="email" className="font-semibold mr-[5px]">Email:</label>
            <input type="email" name="email" id="email" placeholder="JohnDoe@mail.com" onChange={(event)=> setEmail(event.target.value)}
             className={"w-[200px] rounded-md bg-gray-200 pl-[5px] mb-[10px] md:w-[250px] md:h-[30px]"+ (EmailError? 'border-solid border-2 border-red-700': '')}/>

            <label htmlFor="password" className="font-semibold mr-[5px]">Password:</label>
            <input type="password" name="password" id="password" onChange={(event)=> setPassword(event.target.value)}
            className={"w-[200px] rounded-md bg-gray-200 pl-[5px] mb-[10px] md:w-[250px] md:h-[30px]"+ (PasswordError? 'border-solid border-2 border-red-700': '')}/>

            <button className=" mt-10 w-[100%] h-[35px] md:h-[50px] rounded-md bg-[#333333] text-gray-200 hover:bg-gray-300 hover:text-[#333333] font-semibold">
            Login</button>
            <p className="text-center font-bold mt-5">Or</p>
        </form>
    </div>
)

}

export default LoginForm;