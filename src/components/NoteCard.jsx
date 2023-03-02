

const NoteCard = (props)=>{
    function getBgColor(){

    }
    return(
        <>
            <div className="w-[200px] md:w-[250px] h-[150px] md:h-[200px] bg-gray-300 hover:bg-blue-400 mx-auto md:mx-0 mt-10 rounded-md grid place-content-center hover:cursor-pointer ml-5">
                <p className="font-bold"> {props.title} </p>
            </div>
        </>
    )
}


export default NoteCard;