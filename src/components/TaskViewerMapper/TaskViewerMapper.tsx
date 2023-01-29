import React from 'react'
import { Todo } from '../../App';
import TaskViewer from '../TaskViewer/TaskViewer'

interface props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskViewerMapper:React.FC<props>=({todos,setTodos})=> {
   
  return (
    <div className="dashboard">
        {todos.map((t:Todo)=>(
            <TaskViewer todo={t} key={t.index} todos={todos} setTodos={setTodos} ></TaskViewer>

        ))}
    </div>
  )
}

export default TaskViewerMapper;
