
import React, { useState } from 'react'
import { Todo } from '../../App';
import './TaskViewer.css'
import {AiFillEdit,AiFillDelete} from "react-icons/ai";
import {MdDownloadDone} from "react-icons/md";

interface prop{
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskViewer=({todo,todos,setTodos}:prop)=> {
    const [edit,setEdit]=useState<Boolean>(false);
    const [editTodo,setEditTodo]=useState<string>(todo.title);
    const handleDelete=(id:number)=>{
        setTodos(todos.filter((todo)=>
            todo.index!==id
        ))

    }
    const handleSubmit=(todos:Todo[],id:number,e:React.FormEvent)=>{
        console.log(todos)
       e.preventDefault();
       setTodos(todos.map((todo)=>(
           todo.index===id?{...todo,title:editTodo}:todo)))
        setEdit(!edit);

            
    }

    const handleDone=(id:number,e:React.FormEvent)=>{
        e.preventDefault();
        console.log(id);
        setTodos(todos.map((todo)=>(todo.index===id?{...todo,Done:!todo.Done}:todo)));
           
            
        }
  return (
      <div >
    <form className="view" onSubmit={(e)=>handleSubmit(todos,todo.index,e)}>
        {edit?(
            <input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}></input>):
        todo.Done?(
        <s className="title">{todo.title}</s>):
        (<span className="title">{todo.title}</span>)
        }  
            <div className="options">
            <span className="edit" onClick={(e)=>{e.preventDefault();if(!todo.Done){setEdit(!edit)}}}>
                {/* <img src="./Edit.png" alt="imghere"></img> */}
                <AiFillEdit/>
             
            </span>  
        
           
             
                <span className="delete" onClick={(e)=>{handleDelete(todo.index)}}>
                <AiFillDelete/>
                
                 </span>
            
                <span className="done" onClick={(e)=>{handleDone(todo.index,e)}}>
                    <MdDownloadDone/>
                </span>
            </div>
        
     
      
            </form>  
    </div>
  )
}

export default TaskViewer;
