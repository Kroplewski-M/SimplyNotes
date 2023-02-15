import { Link } from "react-router-dom";


const Nav = ()=>{

    return(
        <>
        <nav className="w-[100vw] h-[60px] bg-primary text-secondary text-center">
           <Link to='/'><p className="font-main text-[30px] text-gray-200 pt-[5px]">SimplyNotes</p></Link> 
        </nav>
        </>
    )
}

export default Nav;