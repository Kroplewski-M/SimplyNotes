import { useState } from "react";


const AddNotePopUp = () =>{
    const [selectedColor, setSelectedColor] = useState(0);

    return(
        <> 
        <section className="w-[100vw] h-[100vh] absolute top-0 right-0 backdrop-blur-md z-50 grid place-content-center">
            <div className="w-[300px] h-[300px] bg-primary rounded-md text-gray-200">
                <p className="font-bold text-center underline text-[20px] pt-[5px]">Add Note:</p>
                <form action="" className="mt-10 ml-[50px]">
                    <label htmlFor="title" className="block font-semibold">Title: </label>
                    <input type="text" name="title" id="title" placeholder="Project Notes" className="w-[200px] rounded-md pl-[5px] text-[#222222] font-semibold" />
                </form>
                <p className="font-semibold pl-[50px] mt-5">Card Color:</p>
                <ul className="flex space-x-5 w-[200px] mx-auto mt-5">
                    <li><div className="w-[30px] h-[30px] rounded-full bg-gray-400"></div></li>
                    <li><div className="w-[30px] h-[30px] rounded-full bg-green-600"></div></li>
                    <li><div className="w-[30px] h-[30px] rounded-full bg-blue-600"></div></li>
                    <li><div className="w-[30px] h-[30px] rounded-full bg-black"></div></li>
                </ul>
                <div className="mt-10 w-[260px] mx-auto">
                    <button className="w-[120px] h-[30px] rounded-md bg-[#333333] font-bold mr-5 hover:cursor-pointer hover:bg-red-600 hover:text-[#222222]">
                        Cancel</button>
                    <button className="w-[120px] h-[30px] rounded-md bg-gray-200 text-[#222222] font-bold hover:cursor-pointer hover:bg-green-600 hover:text-gray-200">
                        Add Note</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default AddNotePopUp;