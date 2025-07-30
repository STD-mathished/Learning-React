export default function Task({text}) {
    return (
        <li className="flex items-center justify-between border border-gray-300 rounded-md p-2">
            <p>{text}</p>
            <button>🗑</button> 
        </li>
    )
}