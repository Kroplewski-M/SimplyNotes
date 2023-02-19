import { UserContext } from '../userContext';
import { useContext, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import { supabase} from '../supabaseClient';

const Profile = ()=>{
    const navigate = useNavigate();
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
    async function logOut(){
        try{
            const { error } = await supabase.auth.signOut();
            if(error) throw error;
            else{
                setUser(null);
                navigate('/');
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        if(user == null){
            navigate('/');
        }
    },[])
    return(
        <>
            <div className="w-[300px] md:w-[500px] h-[500px] bg-prompts mt-10 rounded-md mx-auto text-gray-200 ">
                <p className="font-bold text-[20px] pt-[10px] text-center underline">Account Information</p>
                {
                    user != null?(
                        <>
                        <div className='w-[50px] md:w-[70px] mx-auto mt-5'>
                            <img src={getAvatar()} alt="" className='w-[100%]'/>
                        </div>
                        <div className='mt-5 flex flex-col space-y-3 ml-5 md:text-[20px]'>
                            <p className='text-gray-300'>Account created: <span className='font-bold text-gray-200'>{user.created_at}</span></p>
                            <p className='text-gray-300'>Fullname: <span className='font-bold text-gray-200'>{user.fullName}</span></p>
                            <p className='text-gray-300'>Email: <span className='font-bold text-gray-200'>{user.email}</span></p>
                            <p className='text-gray-300'>Purpose: <span className='font-bold text-gray-200'>{user.usage}</span></p>
                        </div>
                        <div className='w-[250px] md:w-[350px] md:h-[30px] mx-auto mt-16' onClick={logOut}>
                            <button className="w-[100%] h-[100%] rounded-md bg-gray-200 font-bold text-black">Log Out</button>
                        </div>
                        </>
                    ):(
                        <div>
                            <p className='mt-16 font-bold text-center'>You are not logged in! Redirecting...</p>
                        </div>
                    )
                }

            </div>
        </>
    )

}

export default Profile;