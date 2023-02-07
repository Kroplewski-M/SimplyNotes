//disable register button when clicked
//add prompts

import { useState } from "react";
import { supabase} from '../supabaseClient';

const RegisterForm = ()=>{
    const [NameError, setNameError] = useState(false);
    const [EmailError, setEmailError] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);

    
    const [FullName, setFullName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Usage, setUsage] = useState('Hobby notes');

    async function registerUser(){
        console.log(FullName);
        console.log(Email);
        console.log(Password);
        console.log(Usage);
        try{
            const { data, error } = await supabase.auth.signUp({
                email: Email,
                password: Password,
              })
            if(error) throw error;
            else console.log('registered');
        }catch(error){

        }
    }
    const AuthForm = (event)=>{
        event.preventDefault();
        
        if(FullName.length == 0){
            setNameError(true);
        }else{
            setNameError(false);
        }
        if(Email.length == 0 || !Email.includes('@')){
            setEmailError(true);
        }else{
            setEmailError(false);
        }
        if(Password.length == 0){
            setPasswordError(true);
        }else{
            setPasswordError(false);
        }
        if(FullName.length > 0 && Password.length > 0 && Email.length > 0){
            registerUser();
        }
    }
    return(
        <div>
            <form onSubmit={AuthForm} className="mt-5 w-[300px] md:w-[500px] grid place-content-center items-center">
                        <label htmlFor="name" className="font-semibold mr-[5px]">Full Name:</label>
                        <input type="text" name="name" id="name" placeholder="John Doe" onChange={(event)=> setFullName(event.target.value)}
                        className={"w-[200px] md:w-[250px] md:h-[30px] rounded-md bg-gray-200 pl-[5px] mb-[10px]" + (NameError? 'border-solid border-2 border-red-700': '')}/>

                        <label htmlFor="email" className="font-semibold mr-[5px]">Email:</label>
                        <input type="email" name="email" id="email" placeholder="JohnDoe@mail.com" onChange={(event)=> setEmail(event.target.value)}
                        className={"w-[200px] md:w-[250px] md:h-[30px] rounded-md bg-gray-200 pl-[5px] mb-[10px]"+ (EmailError? 'border-solid border-2 border-red-700': '')}/>

                        <label htmlFor="password" className="font-semibold mr-[5px]">Password:</label>
                        <input type="password" name="password" id="password" onChange={(event)=> setPassword(event.target.value)}
                        className={"w-[200px] md:w-[250px] md:h-[30px] rounded-md bg-gray-200 pl-[5px] mb-[10px]"+ (PasswordError? 'border-solid border-2 border-red-700': '')}/>
                        
                        <label htmlFor="use" className="w-[200px] font-semibold text-center">What are you going to use this app for?</label>
                        <select name="use" id="usage" className="mt-5 bg-gray-200 rounded-md font-semibold mb-10" onChange={(event)=>setUsage(event.target.value)}>
                            <option value="Hobby notes">Hobby notes</option>
                            <option value="University notes">University notes</option>
                            <option value="Work notes">Work notes</option>
                        </select>
                        <button className="w-[100%] h-[35px] md:h-[50px] rounded-md bg-[#333333] text-gray-200 hover:bg-gray-300 hover:text-[#333333] font-semibold">Register</button>
                        <p className="text-center font-bold mt-5">Or</p>
                    </form>
        </div>
    )
} 

export default RegisterForm;