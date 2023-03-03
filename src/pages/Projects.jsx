import NoteCard from "../components/NoteCard";
import AddNotePopUp from "../components/AddNotePopUp";
import { useState, useContext, useEffect} from "react";
import { useNavigate  } from 'react-router-dom';
import { UserContext } from "../userContext";
import { NotesContext } from '../notesContext';
import { supabase} from '../supabaseClient';

const Projects = () =>{
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserContext);
    const {notes,setNotes} = useContext(NotesContext);
    const [popUp,setPopUp] = useState(false);

    const closePopUp = ()=>{
        setPopUp(false);
    }
    const plusImg = new URL('../assets/plus.png', import.meta.url).href;

    
    async function fetchNotes(){  
        try{
            const { data, error } = await supabase
            .from('Notes')
            .select().eq('userID',user.id);
            if(error) throw error;
            else{
                setNotes(data);
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        if(user){
            if(notes.length == 0){
                fetchNotes();
            }
        }
    },[]);

    return(
        <>
            <div className="w-[300px] md:w-[850px] mx-auto mt-10">
                <p className="font-bold text-left text-[20px] md:text-[30px]">Notes:</p>
            
                <div className="flex flex-wrap space-x-5 w-[100%]">
                    <div onClick={()=> setPopUp(true)}
                    className="w-[200px] md:w-[250px] h-[150px] md:h-[200px] bg-gray-400 mx-auto md:mx-0 mt-10 md:ml-5 rounded-md grid place-content-center hover:cursor-pointer hover:bg-gray-500">
                        <div className="w-[50px]">
                            <img src={plusImg} alt="" className="w-[100%]"></img>
                        </div>
                    </div>
                    {
                        notes?.length > 0?(
                            <>
                                {
                                    notes.map((card)=>(
                                        <div key={card.id} onClick={()=> navigate(`/EditNotes/${card.id}`)}>
                                            <NoteCard title={card.NoteTitle} bgColor={card.CardColor} />
                                        </div>
                                    ))
                                }
                            </>
                        ):(
                            <div>
                            </div>
                        )   
                    }
                    {
                        popUp?(
                                    <AddNotePopUp closePopUp={closePopUp} />
                        ):(
                            <div></div>
                        )
                    }

                </div>
            </div>
        </>
    )
}


export default Projects;