export default function Task({text, handleDelete, handleComplete}) {
    return (
        <li className="flex items-center justify-between border border-gray-300 rounded-md p-2">
            <p>{text}</p>

            <div className="flex gap-2">
                <button onClick={handleDelete} className="cursor-pointer">🗑</button> 
                <button onClick={handleComplete} className="cursor-pointer">✅</button>    
            </div>
            
        </li>
    )
}