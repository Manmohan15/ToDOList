
import React from 'react'

import './TaskAdder.css'
interface prop{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}

const TaskAdder:React.FC<prop> =({todo,setTodo,handleAdd}) => {
  return (
    <div>
      <form className="taskForm">
        <input type="text" value={todo} onChange={e=>setTodo(e.target.value)}  required placeholder="Enter Task" className="taskInput" />
        <button className="SubmitWork" onClick={(e)=>handleAdd(e)}>Go</button>
        </form> 
    </div>
  )
}

export default TaskAdder;
