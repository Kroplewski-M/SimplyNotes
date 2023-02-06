//Validate form
//set input to vars
//link supabase
//register users

import { useState } from "react";


const RegisterForm = ()=>{
    const [userInfo, setUserInfo] = useState([]);
    
    const [FullName, setFullName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [usage, setUsage] = useState('');

    const registerUser = (event) =>{
        event.preventDefault();
        console.log('register');
    }
    return(
        <div>
            <form onSubmit={registerUser} className="mt-5 w-[300px] md:w-[500px] grid place-content-center items-center">
                        <label htmlFor="name" className="font-semibold mr-[5px]">Full Name:</label>
                        <input type="text" name="name" id="name" placeholder="John Doe" className="w-[200px] md:w-[250px] md:h-[30px] rounded-md bg-gray-200 pl-[5px] mb-[10px]"/>

                        <label htmlFor="email" className="font-semibold mr-[5px]">Email:</label>
                        <input type="email" name="email" id="email" placeholder="JohnDoe@mail.com" className="w-[200px] md:w-[250px] md:h-[30px] rounded-md bg-gray-200 pl-[5px] mb-[10px]"/>

                        <label htmlFor="password" className="font-semibold mr-[5px]">Password:</label>
                        <input type="password" name="password" id="password" className="w-[200px] md:w-[250px] md:h-[30px] rounded-md bg-gray-200 pl-[5px] mb-[10px]"/>
                        
                        <label htmlFor="use" className="w-[200px] font-semibold text-center">What are you going to use this app for?</label>
                        <select name="use" id="usage" className="mt-5 bg-gray-200 rounded-md font-semibold mb-10">
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