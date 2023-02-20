import NoteCard from "../components/NoteCard";

const Projects = () =>{
    const cards = [1,2,3,4,5];

    return(
        <>
            <div className="w-[300px] md:w-[850px] mx-auto mt-10">
                <p className="font-bold text-left text-[20px] md:text-[30px]">Notes:</p>
            
                <div className="flex flex-wrap space-x-5 w-[100%]">
                    <div 
                    className="w-[200px] md:w-[250px] h-[150px] md:h-[200px] bg-gray-300 mx-auto md:mx-0 mt-10 md:ml-5 rounded-md grid place-content-center hover:cursor-pointer hover:bg-gray-400">
                        <div className="w-[50px]">
                            <img src="../src/assets/plus.png" alt="" className="w-[100%]"></img>
                        </div>
                    </div>
                    {
                        cards?.length > 0?(
                            <>
                                {
                                    cards.map((card)=>(
                                        <div key={card}>
                                            <NoteCard />
                                        </div>
                                    ))
                                }
                            </>
                        ):(
                            <div>
                            </div>
                        )   
                    }
                </div>
            </div>
        </>
    )
}


export default Projects;