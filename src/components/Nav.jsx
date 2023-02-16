import { UserContext } from '../userContext';
import { useContext, useState,useEffect } from "react";
import { useNavigate  } from 'react-router-dom';


const Nav = ()=>{
    const navigate = useNavigate();

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [showPrompt, setShowPrompt] = useState(false);
    const [MobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }
      useEffect(() =>{
          if(windowSize.innerWidth >= 768 && MobileMenu){
            setMobileMenu(false);
          }
          if(windowSize.innerWidth < 768 && showPrompt){
            setShowPrompt(false);
          }

      },[windowSize.innerWidth]);

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
    function goToProfile(){
        setShowPrompt(false);
        setMobileMenu(false);
        navigate('/profile');
    }
    return(
        <>
        <nav className="w-[100vw] h-[60px] bg-primary text-secondary">
           <p className="font-main text-[30px] text-gray-200 pt-[5px] w-[150px] mx-auto hover:cursor-pointer" onClick={()=> navigate('/')}>SimplyNotes</p>
           {
            user != null ?(
                <>
                    <div className="w-[50px] h-[50px] absolute right-10 top-1 hover:cursor-pointer"> 
                    {
                        windowSize.innerWidth >= 768?(
                            <>
                            <div  onClick={()=> setShowPrompt(()=> !showPrompt)}>
                                <img src={getAvatar()} alt="" />
                            </div>
                            </>
                        ):(
                            <div onClick={()=> setMobileMenu(()=> !MobileMenu)}>
                                <img src='../src/assets/mobileMenu.png' alt=""
                                className="w-[40px] absolute -right-5 top-1 hover:cursor-pointer z-50"/>
                            </div>
                        )
                    }
                    </div>
                    <div>
                        {/* Desktop prompt */}
                        {
                            showPrompt?(
                                <div className="w-[400px] h-[200px] bg-prompts absolute right-10 top-[60px] rounded-md z-50">
                                    <div className="mr-[5px] mt-[5px] flex justify-end" onClick={()=> setShowPrompt(()=> !showPrompt)}>
                                        <img src="../src/assets/close.png" alt="" className="w-[30px] hover:cursor-pointer"/>
                                    </div>
                                    <div className="text-center text-gray-200 text-[20px]">
                                        <p>Hi,</p>
                                        <p className="font-bold">{user.fullName}</p>
                                    </div>
                                    <div className="w-[300px] h-[35px] mx-auto mt-10" onClick={()=> goToProfile()}>
                                        <button className="w-[100%] h-[100%] rounded-md bg-gray-200 font-bold">Account Settings</button>
                                    </div>

                                </div>
                            ):(
                                <div></div>
                            )
                        }
                        {/* mobile menu */}
                        {
                            MobileMenu && windowSize.innerWidth < 768?(
                                <div className="absolute w-[100vw] h-[100vh] bg-primary z-50 top-0">
                                    <div className="mr-[5px] mt-[5px] flex justify-end" onClick={()=> setMobileMenu(()=> !MobileMenu)}>
                                        <img src="../src/assets/close.png" alt="" className="w-[30px] hover:cursor-pointer"/>
                                    </div>
                                    <div className="text-gray-200 text-center text-[20px] mt-16">
                                        <p>Hi,</p>
                                        <p className="font-bold">{user.fullName}</p>
                                    </div>
                                        <div className="w-[300px] h-[35px] mx-auto mt-10" onClick={()=> goToProfile()}>
                                            <button className="w-[100%] h-[100%] rounded-md bg-gray-200 font-bold">Account Settings</button>
                                        </div>
                                </div>
                            ):(
                                <div></div>
                            )
                        }
                    </div>
                </>
            ):(
                <div></div>
            )
           }
        </nav>
        </>
    )
}

export default Nav;