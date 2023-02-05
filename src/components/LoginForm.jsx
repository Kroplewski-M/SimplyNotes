

const LoginForm = ()=>{

return(
    <div>
        <form action="" className="mt-5 w-[300px] md:w-[500px]  grid place-content-center items-center">
            <label htmlFor="email" className="font-semibold mr-[5px]">Email:</label>
            <input type="email" name="email" id="email" placeholder="JohnDoe@mail.com" className="w-[200px] rounded-md bg-gray-200 pl-[5px] mb-[10px] md:w-[250px] md:h-[30px]"/>

            <label htmlFor="password" className="font-semibold mr-[5px]">Password:</label>
            <input type="password" name="password" id="password" className="w-[200px] rounded-md bg-gray-200 pl-[5px] mb-[10px] md:w-[250px] md:h-[30px]"/>

            <button className=" mt-10 w-[100%] h-[35px] md:h-[50px] rounded-md bg-[#333333] text-gray-200 hover:bg-gray-300 hover:text-[#333333] font-semibold">
            Login</button>
            <p className="text-center font-bold mt-5">Or</p>
        </form>
    </div>
)

}

export default LoginForm;