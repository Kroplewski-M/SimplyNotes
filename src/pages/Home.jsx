import { Link } from "react-router-dom";

const Home =()=>{
    let folders = [];
    for(let i=0; i < 7;i++){
        folders.push(i);
    }
    return(
        <>
        <p className="font-semibold text-center pt-5">The online notebook made for you</p>
        <div className="w-[350px] md:w-[800px] md:mx-auto fixed bottom-10 -right-10 md:relative  md:flex md:space-x-5 md:mt-[100px] ">
            <img src="../src/assets/svg/notebook.svg" alt="" className=' w-[100%] md:w-[350px]'/>
            <div className="flex flex-wrap mt-16 hidden md:inline-flex ">
                <p className="font-main text-semibold text-[18px] -mb-10">A way to organise all your notes in one place!</p>
                {folders.map((folder,key)=>{
                    return <img src="../src/assets/svg/folder.svg" alt="" key={folder} className=' w-[100px] mr-[5px]'/>
                })}
                
            </div>
        </div>
        <div className='md:mt-[70px] mt-[30px] md:w-[150px] w-[200px] mx-auto'>
            <Link to='/auth'><button className='w-[100%] h-[35px] md:h-[50px] rounded-md bg-primary hover:bg-primary/70 font-semibold text-gray-200'>Get Started</button></Link>
        </div>
       </>
    )
}

export default Home;