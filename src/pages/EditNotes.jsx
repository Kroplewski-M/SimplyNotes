import { useEffect, useState, useContext } from "react";
import { marked } from 'marked';
import './EditNotes.css'
import { useParams } from "react-router-dom";
import { NotesContext } from '../notesContext';
import { supabase} from '../supabaseClient';
import DeleteNotePrompt from "../components/deleteNotePrompt";

const EditNotes = ()=>{

    const {id} = useParams();
    const {notes,setNotes} = useContext(NotesContext);

    const [isEditing, setIsEditing] = useState(true);
    const [editBg,setEditBg] = useState('bg-gray-300');
    const [viewBg,setViewBg]= useState('bg-primary');
    const [myNotes,setMyNotes] = useState('');
    const [noteData, setNoteData] = useState([]);
    const [deletePromt, setDeletePromt] = useState(false);

    useEffect(()=>{
        if(isEditing){
            setEditBg('bg-gray-300');
            setViewBg('bg-primary')
        }else{
            setEditBg('bg-primary');
            setViewBg('bg-gray-300');
        }
    },[isEditing])

    useEffect(()=>{
        if(notes != undefined){
            setNoteData(()=> notes.filter(item => item.id == id));
            setMyNotes(()=> notes.filter(item => item.id == id)[0].Notes)
        }
    },[])
 
   async function updateNotes(){
        console.log(myNotes);
        // setNotes(notes.map(item => item.id == id).Notes = myNotes);
        // TO DO- SAVE NOTE TO LOCAL VARIABLE
        console.log(notes);
        try{
            const { error } = await supabase.from('Notes').update({Notes: myNotes }).eq('id', id)
            if(error) throw error;
            else{
                console.log('notes updated!')
            }
        }catch(error){
            console.log(error);
        }
   }

    if(noteData[0] == undefined){
        return (
            <>
                <p>Loading</p>
            </>
        )
    }else{

        return(
            <>
                <section className="w-[100vw]">
                    <div className="flex flex-wrap w-[100%] justify-center mt-5 flex-col md:flex-row place-content-center">
                        <h1 className="text-[#222222] font-bold text-[25px]">{noteData[0].NoteTitle}</h1>
                         <button onClick={d}
                            className="w-[100px] h-[30px] bg-red-600 rounded-md font-semibold ml-5 mt-5 md:mt-[5px] hover:bg-red-700"
                            >Delete Note</button>
                    </div>
                    <div className="flex md:w-[450px] w-[200px] mx-auto mt-10 md:space-x-5">
                        <button className={`w-[100px] h-[30px] rounded-md font-semibold mr-5 ${editBg}`}
                            onClick={()=>setIsEditing(true)}>Edit</button>
                        <button className={`w-[100px] h-[30px] rounded-md font-semibold mr-5 ${viewBg}`}
                            onClick={()=> setIsEditing(false)}>View</button>
                        <button onClick={updateNotes}
                        className="w-[100px] h-[30px] bg-primary rounded-md font-semibold">Save</button>
                    </div>
                    {
                        isEditing?(
                            <>
                                <div className="md:flex md:place-content-center max-w-[1250px] md:mx-auto">
                                    <div className="w-[300px] md:w-[200px] rounded-md bg-gray-300 mt-5 mx-auto pl-[5px] font-semibold flex flex-wrap p-[10px] md:mr-10 md:relative md:h-[350px]">
                                    <p className="mr-[5px] h-[30px] p-0 m-0">Key:</p>
                                    <div className="flex flex-wrap w-[80%] md:w-[95%] md:mx-auto space-y-2 md:space-y-0">
                                        <p className="mr-[5px] h-[35px] m-0 pb-0  bg-gray-400 p-[4px] rounded-md mt-[8px] md:mt-0"># : h1</p>
                                        <p className="mr-[5px] h-[35px] m-0 pb-0  bg-gray-400 p-[4px] rounded-md">*example* : italic</p>
                                        <p className="mr-[5px] h-[35px] m-0 pb-0  bg-gray-400 p-[4px] rounded-md">**example** : bold</p>
                                        <p className="mr-[5px] h-[35px] m-0 pb-0  bg-gray-400 p-[4px] rounded-md">1. : ordered list</p>
                                        <p className="mr-[5px] h-[35px] m-0 pb-0  bg-gray-400 p-[4px] rounded-md">- : unordered list</p>
                                        <p className="mr-[5px] h-[55px] m-0 pb-0  bg-gray-400 p-[4px] rounded-md ">- example : unordered list</p>
                                    </div>
                                </div>  
                        <div>
                            <div className="w-[95vw] md:w-[60vw] max-w-[1000px] mx-auto mt-10 ">
                                <textarea name="notes" id="notes" autoFocus className="w-[100%] bg-gray-200 pl-5 pt-5 h-[500px]" value={myNotes}
                                onChange={(event)=> setMyNotes(event.target.value)}></textarea>
                            </div>
    
                        </div>
    
                        </div>
                            </>
                        ):(
                            <>
                                <div className="w-[100vw] md:max-w-[800px] md:mx-auto mt-16 h-[500px] markdown">
                                    <div dangerouslySetInnerHTML={{__html: `${marked.parse(myNotes)}`}}></div>
                                </div>
                            </>
                        )
                    }
                    
                </section>
            </>
        )
    }
}

export default EditNotes;