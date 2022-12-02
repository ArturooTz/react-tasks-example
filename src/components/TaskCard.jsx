import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
//import "./TaskCard.css";

function TaskCard({task, deleteTask}) {
    

    const valor = useContext(TaskContext)
   // console.log(valor);

    return(
        <div className="bg-gray-800 text-white p-4 rounded-md relative">
            <h3 className="text-xl font-bold capitalize">{task.title}</h3>
            <p className="text-gray-500 text-sm">{task.description}</p>
            <button className="bg-red-500 px-2 rounded-md absolute top-5 right-5 hover:bg-red-400" onClick={()=> deleteTask(task.id)}>X</button>
        </div>
        
    );
}

export default TaskCard;