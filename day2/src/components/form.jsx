export default function Form() {
    
    return (
        <div>
            <form action="send" className="flex gap-3 items-center">
                <input type="text" placeholder="Add a new task"  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Add
                </button>
            </form>
        </div>
    )
}