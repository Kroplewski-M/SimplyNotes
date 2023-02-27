

const EditBlog = ()=>{
    
    return(
        <>
            <section className="w-[100vw]">
                <h1 className="text-[#222222] font-bold text-[20px] mt-5 text-center">Project 1</h1>
                <div className="flex w-[350px] mx-auto mt-10">
                    <button className="w-[100px] h-[30px] bg-primary rounded-md font-semibold mr-5">Edit</button>
                    <button className="w-[100px] h-[30px] bg-primary rounded-md font-semibold mr-5">View</button>
                    <button className="w-[100px] h-[30px] bg-primary rounded-md font-semibold">Save</button>
                </div>
                <div className="md:flex md:place-content-center max-w-[1200px] md:mx-auto">
                    <div className="w-[300px] md:w-[200px] rounded-md bg-gray-300 mt-5 mx-auto pl-[5px] font-semibold flex flex-wrap p-[10px] md:mr-10 md:relative md:h-[350px]">
                        <p className="mr-[5px] h-[30px]">Key:</p>
                        <div className="flex flex-wrap w-[80%] md:w-[95%] md:mx-auto space-y-2 md:space-y-0">
                            <p className="mr-[5px] h-[35px]  bg-gray-400 p-[4px] rounded-md mt-[8px] md:mt-0"># : h1</p>
                            <p className="mr-[5px] h-[35px] bg-gray-400 p-[4px] rounded-md">*example* : italic</p>
                            <p className="mr-[5px] h-[35px] bg-gray-400 p-[4px] rounded-md">**example** : bold</p>
                            <p className="mr-[5px] h-[35px] bg-gray-400 p-[4px] rounded-md">1. : ordered list</p>
                            <p className="mr-[5px] h-[35px] bg-gray-400 p-[4px] rounded-md">- : unordered list</p>
                            <p className="mr-[5px] h-[55px] bg-gray-400 p-[4px] rounded-md ">- example : unordered list</p>
                        </div>
                    </div>  
                    <div>
                        <div className="w-[95vw] md:w-[60vw] max-w-[1000px] mx-auto mt-10 ">
                            <textarea name="notes" id="notes" autoFocus className="w-[100%] bg-gray-200 pl-[5px] h-[500px]"></textarea>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default EditBlog;