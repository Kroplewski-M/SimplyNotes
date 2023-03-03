

const NoteCard = (props)=>{
    function getBgColor(color){
        if(color == 0){
            return 'bg-gray-400 hover:bg-gray-300'
        }
        if(color == 1){
            return 'bg-green-600 hover:bg-green-400'
        }
        if(color == 2){
            return 'bg-blue-600 hover:bg-blue-400'
        }
        if(color == 3){
            return 'bg-black hover:bg-gray-400'
        }
    }
    return(
        <>
            <div className={`w-[200px] md:w-[250px] h-[150px] md:h-[200px] ${getBgColor(props.bgColor)} mx-auto md:mx-0 mt-10 rounded-md grid place-content-center hover:cursor-pointer ml-5`}>
                <p className="font-bold"> {props.title} </p>
            </div>
        </>
    )
}


export default NoteCard;