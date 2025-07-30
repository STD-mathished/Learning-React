export default function Task({text, handleDelete, handleComplete, status}) {
    return (
        <li className="flex items-center justify-between border border-gray-300 rounded-md p-2">

            {/* Ternary expression : if status === done then 'del' else 'p'*/}
            {status === 'done' ? <del className="font-bold text-red-500">{text}</del> : <p>{text}</p>}


            <div className="flex gap-2">
                <button onClick={handleDelete} className="cursor-pointer">🗑</button> 
                <button onClick={handleComplete} className="cursor-pointer">✅</button>    
            </div>
            
        </li>
    )
}