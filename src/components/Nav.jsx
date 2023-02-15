import { Link } from "react-router-dom";
import { UserContext } from '../userContext';
import { useContext } from "react";


const Nav = ()=>{
    const {user,setUser} = useContext(UserContext);

    const defaultAvatar1 = new URL('../assets/avatars/defaultAvatar1.png', import.meta.url).href;
    const defaultAvatar2 = new URL('../assets/avatars/defaultAvatar2.png', import.meta.url).href;
    const defaultAvatar3 = new URL('../assets/avatars/defaultAvatar3.png', import.meta.url).href;
    const defaultAvatar4 = new URL('../assets/avatars/defaultAvatar4.png', import.meta.url).href;

    function getAvatar(){
        if(user.AvatarNum == 1){
            return defaultAvatar1;
        }
        if(user.AvatarNum == 2){
            return defaultAvatar2;
        }if(user.AvatarNum == 3){
            return defaultAvatar3;
        }if(user.AvatarNum == 4){
            return defaultAvatar4;
        }
    }
    return(
        <>
        <nav className="w-[100vw] h-[60px] bg-primary text-secondary text-center">
           <Link to='/'><p className="font-main text-[30px] text-gray-200 pt-[5px]">SimplyNotes</p></Link> 
           {
            user != null ?(
                <div className="w-[50px] h-[50px]  absolute right-10 top-1 hover:cursor-pointer">
                    <img src={getAvatar()} alt="" />
                </div>
            ):(
                <div></div>
            )
           }
        </nav>
        </>
    )
}

export default Nav;