import { useState } from "react";


const Auth = () =>{
    const [register,setRegister] = useState(true);

    return(
            <div className="w-[300px] md:w-[500px] rounded-md bg-lightBrown mx-auto mt-5">
                {register ?
                (
                <div>
                    <p className="font-bold text-center text-[20px] md:text-[25px] pt-[5px]">Register</p>
                    <form action="" className="mt-5 w-[300px] md:w-[500px] grid place-content-center items-center">
                        <label htmlFor="name" className="font-semibold mr-[5px]">Full Name:</label>
                        <input type="text" name="name" id="" className="w-[200px] md:w-[250px] md:h-[30px] rounded-md bg-gray-200 pl-[5px] mb-[10px]"/>

                        <label htmlFor="email" className="font-semibold mr-[5px]">Email:</label>
                        <input type="email" name="email" id="" className="w-[200px] md:w-[250px] md:h-[30px] rounded-md bg-gray-200 pl-[5px] mb-[10px]"/>

                        <label htmlFor="password" className="font-semibold mr-[5px]">Password:</label>
                        <input type="password" name="password" id="" className="w-[200px] md:w-[250px] md:h-[30px] rounded-md bg-gray-200 pl-[5px] mb-[10px]"/>
                        
                        <label htmlFor="use" className="w-[200px] font-semibold text-center">What are you going to use this app for?</label>
                        <select name="use" id="" className="mt-5 bg-gray-200 rounded-md font-semibold mb-10">
                            <option value="Hobby notes">Hobby notes</option>
                            <option value="University notes">University notes</option>
                            <option value="Work notes">Work notes</option>
                        </select>
                        <button className="w-[100%] h-[35px] md:h-[50px] rounded-md bg-[#333333] text-gray-200 hover:bg-gray-300 hover:text-[#333333] font-semibold">Register</button>
                        <p className="text-center font-bold mt-5">Or</p>
                    </form>
                    <div className="w-[200px] mx-auto">
                        <button className="w-[100%] h-[35px] md:h-[50px] rounded-md bg-[#333333] text-gray-200 hover:bg-gray-300 hover:text-[#333333] font-semibold mt-5 mb-10"
                        onClick={()=> setRegister(!register)}>Log In</button>
                    </div>
                </div>
                ):
                (
                    <div>
                        <p className="font-bold text-center text-[20px] md:text-[25px] pt-[5px]">Login</p>
                        <form action="" className="mt-5 w-[300px] md:w-[500px]  grid place-content-center items-center">
                            <label htmlFor="email" className="font-semibold mr-[5px]">Email:</label>
                            <input type="email" name="email" id="" className="w-[200px] rounded-md bg-gray-200 pl-[5px] mb-[10px] md:w-[250px] md:h-[30px]"/>

                            <label htmlFor="password" className="font-semibold mr-[5px]">Password:</label>
                            <input type="password" name="password" id="" className="w-[200px] rounded-md bg-gray-200 pl-[5px] mb-[10px] md:w-[250px] md:h-[30px]"/>

                            <button className=" mt-10 w-[100%] h-[35px] md:h-[50px] rounded-md bg-[#333333] text-gray-200 hover:bg-gray-300 hover:text-[#333333] font-semibold">
                            Login</button>
                            <p className="text-center font-bold mt-5">Or</p>
                        </form>
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