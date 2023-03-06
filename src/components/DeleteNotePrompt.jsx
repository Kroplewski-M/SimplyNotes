import { supabase } from "../supabaseClient";
import { NotesContext } from '../notesContext';
import { useNavigate  } from 'react-router-dom';
import { useContext, useState } from "react";


const DeleteNotePrompt = (props)=>{
    const {notes,setNotes} = useContext(NotesContext);
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    async function deleteNote(){
        setDisabled(true);
            try{
                const {error} = await supabase.from('Notes')
                .delete().eq('id', props.id);
                if(error) throw error;
                else{
                    setNotes(currItems =>{return currItems.filter(item => item.id !== props.id)});
                    console.log("note deleted")
                    setTimeout(function() {
                        navigate('/projects');
                    }, 500);
                }
            }catch(error){
                console.log(error);
            }finally{
                setDisabled(false);
            }
    }


    return(
        <>
        <section className="w-[100vw] h-[100vh] grid place-content-center backdrop-blur">
            <div className="w-[300px] md:w-[400px] h-[300px] bg-primary rounded-md pt-5 grid place-content-center">
                <p className="text-[20px] text-gray-200 font-semibold w-[300px] text-center">
                     Are you sure you want to delete <span className="font-bold text-gray-100">{props.title} </span> </p>
                <div className="flex mt-5 space-x-4 w-[230px] mx-auto">
                    <button className="w-[100px] h-[25px] rounded-md bg-red-600 font-semibold hover:font-bold hover:bg-red-700" onClick={deleteNote} disabled={disabled}>Delete</button>
                    <button onClick={props.cancel}
                    className="w-[100px] h-[25px] rounded-md bg-gray-200 font-semibold hover:font-bold hover:bg-gray-300">Cancel</button>

                </div>

            </div>
        </section>
        </>
    )
}

export default DeleteNotePrompt;