export default function Form({handleName, handleFname}) {
    return(
    <form className="flex gap-3 flex-col">
        <div className="flex gap-4 items-center ml-4">
            <label htmlFor="name">First name:</label>
            <input type="text"  placeholder="Enter your name" className="rounded border  pl-1" onChange={(e) => handleName(e.target.value)}/>
        </div>

        <div className="flex gap-4 items-center ml-4">
            <label htmlFor="lastName">Last name:</label>
            <input type="text"  placeholder="Enter your name" className="rounded border  pl-1" onChange={(e) => handleFname(e.target.value)}/>
        </div>
    </form>

    )
    
}