import { useState, useContext } from "react";
import { supabase } from "../supabaseClient";
import { UserContext } from "../userContext";
import { NotesContext } from '../notesContext';

const AddNotePopUp = ({closePopUp}) =>{
    const {user,setUser} = useContext(UserContext);
    const {notes,setNotes} = useContext(NotesContext);

    const [selectedColor, setSelectedColor] = useState(0);
    const [title,setTitle] = useState('');
    
    async function createNote(event){
        event.preventDefault();
        if(title != ''){
            try{
                const { data,error } = await supabase
                .from('Notes')
                .insert({  userID: user.id, NoteTitle: title, CardColor: selectedColor, Notes: ''});
                if(error) throw error;
                else{
                    closePopUp();
                    const newNote = {  userID: user.id, NoteTitle: title, CardColor: selectedColor, Notes: ''};
                    console.log(newNote);
                    setNotes(current => [...current,newNote ])
                }
            }catch(error){
                console.log(error);
            }
        }else{
            console.log('no title');
        }
    }
    return(
        <> 
        <section className="w-[100vw] h-[100vh] absolute top-0 right-0 backdrop-blur-md z-50 grid place-content-center">
            <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary rounded-md text-gray-200 z-50">
                <p className="font-bold text-center underline text-[20px] md:text-[25px] pt-[5px]">Add Note:</p>
                <form onSubmit={createNote} className="mt-10">
                    <div className="ml-10 md:ml-16">
                        <label htmlFor="title" className="block font-semibold md:text-[20px]">Title: </label>
                        <input type="text" name="title" id="title" placeholder="Project Notes" onChange={(event)=> setTitle(event.target.value)}
                        className="w-[200px] md:w-[250px] md:h-[30px] rounded-md pl-[5px] text-[#222222] font-semibold" />
                    </div>
                <p className="font-semibold pl-[50px] md:text-[20px] md:pl-[70px] mt-5">Card Color:</p>
                <ul className="flex space-x-5 w-[200px] mx-auto mt-5 hover:cursor-pointer">
                    <li onClick={()=> setSelectedColor(0)}><div 
                    className={"w-[30px] md:w-[35px] md:h-[35px] h-[30px] rounded-full bg-gray-400 hover:border-2 hover:border-solid hover:border-gray-100"  
                    + (selectedColor == 0? 'border-solid border-2 border-gray-300' : '')}></div></li>
                    <li onClick={()=> setSelectedColor(1)}><div 
                    className={"w-[30px] h-[30px] md:w-[35px] md:h-[35px] rounded-full bg-green-600 hover:border-2 hover:border-solid hover:border-gray-100"
                    + (selectedColor == 1? 'border-solid border-2 border-gray-300' : '')}></div></li>
                    <li onClick={()=> setSelectedColor(2)}><div 
                    className={"w-[30px] h-[30px] md:w-[35px] md:h-[35px] rounded-full bg-blue-600 hover:border-2 hover:border-solid hover:border-gray-100"
                    + (selectedColor == 2? 'border-solid border-2 border-gray-300' : '')}></div></li>
                    <li onClick={()=> setSelectedColor(3)}><div 
                    className={"w-[30px] h-[30px] md:w-[35px] md:h-[35px] rounded-full bg-black hover:border-2 hover:border-solid hover:border-gray-100"
                    + (selectedColor == 3? 'border-solid border-2 border-gray-300' : '')}></div></li>
                </ul>
                <div className="mt-10 w-[260px] md:w-[320px] mx-auto">
                    <button className="w-[120px] md:w-[150px] md:h-[35px] h-[30px] rounded-md bg-[#333333] font-bold mr-5 hover:cursor-pointer hover:bg-red-600 hover:text-[#222222]"
                    onClick={closePopUp}>
                        Cancel</button>
                    <button
                    className="w-[120px] h-[30px] md:w-[150px] md:h-[35px] rounded-md bg-gray-200 text-[#222222] font-bold hover:cursor-pointer hover:bg-green-600 hover:text-gray-200">
                    Add Note</button>
                </div>
                </form>

            </div>
        </section>
        </>
    )
}

export default AddNotePopUp;