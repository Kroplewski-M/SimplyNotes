import { useState } from "react";
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';


const Auth = () =>{
    const [register,setRegister] = useState(true);
    return(
            <div className="w-[300px] md:w-[500px] rounded-md bg-primary mx-auto mt-5">
                {register ?
                (
                <div>
                    <p className="font-bold text-center text-[20px] md:text-[25px] pt-[5px]">Register</p>
                    <RegisterForm />
                    <div className="w-[200px] mx-auto">
                        <button className="w-[100%] h-[35px] md:h-[50px] rounded-md bg-[#333333] text-gray-200 hover:bg-gray-300 hover:text-[#333333] font-semibold mt-5 mb-10"
                        onClick={()=> setRegister(!register)}>Log In</button>
                    </div>
                </div>
                ):
                (
                    <div>
                        <p className="font-bold text-center text-[20px] md:text-[25px] pt-[5px]">Login</p>
                        <LoginForm />
                        <div className="w-[200px] mx-auto">
                            <button className="w-[100%] h-[35px] md:h-[50px] rounded-md bg-[#333333] text-gray-200 hover:bg-gray-300 hover:text-[#333333] font-semibold mt-5 mb-10"
                            onClick={()=> setRegister(!register)}>Register</button>
                        </div>
                    </div>
                )
                
                }
                
            </div>
    )

}


export default Auth;