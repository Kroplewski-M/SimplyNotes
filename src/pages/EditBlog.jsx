

const EditBlog = ()=>{
    
    return(
        <>
            <section className="w-[100vw]">
                <h1 className="text-[#222222] font-bold text-[20px] mt-5 text-center">Project 1</h1>
                <div className="w-[300px] md:w-[600px] rounded-md bg-gray-300 mt-5 mx-auto pl-[5px] font-semibold flex flex-wrap p-[10px]">
                    <p className="mr-[5px]">Key:</p>
                    <div className="flex flex-wrap w-[80%] md:w-[90%] mx-auto space-y-2 ">
                        <p className="mr-[5px]  bg-gray-400 p-[4px] rounded-md mt-[8px]"># : h1</p>
                        <p className="mr-[5px]  bg-gray-400 p-[4px] rounded-md">*example* : italic</p>
                        <p className="mr-[5px]  bg-gray-400 p-[4px] rounded-md">**example** : bold</p>
                        <p className="mr-[5px]  bg-gray-400 p-[4px] rounded-md">1. : ordered list</p>
                        
                        <p className="mr-[5px]  bg-gray-400 p-[4px] rounded-md ">- example : unordered list</p>
                    </div>
                </div>  
                <div className="w-[95vw] md:w-[60vw] mx-auto mt-10 ">
                    <textarea name="notes" id="notes" autoFocus className="w-[100%] bg-gray-200 pl-[5px] h-[500px]"></textarea>
                </div>
            </section>
        </>
    )
}

export default EditBlog;