export default function Form({text, setText, onSubmit}) {
    
    return (
        <div>
            <form onSubmit={onSubmit} className="flex gap-3 items-center">
                <input 
                    type="text"
                    placeholder="Add a new task"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 " 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}/>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Add
                </button>
            </form>
        </div>
    )
}