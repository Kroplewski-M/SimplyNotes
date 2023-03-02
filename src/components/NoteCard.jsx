

const NoteCard = (props)=>{
    function getBgColor(color){
        if(color == 0){
            return 'bg-gray-400'
        }
        if(color == 1){
            return 'bg-green-600'
        }
        if(color == 2){
            return 'bg-blue-600'
        }
        if(color == 3){
            return 'bg-black'
        }
    }
    return(
        <>
            <div className={`w-[200px] md:w-[250px] h-[150px] md:h-[200px] ${getBgColor(props.bgColor)} hover:bg-blue-400 mx-auto md:mx-0 mt-10 rounded-md grid place-content-center hover:cursor-pointer ml-5`}>
                <p className="font-bold"> {props.title} </p>
            </div>
        </>
    )
}


export default NoteCard;