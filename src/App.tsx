import React, { useState } from 'react';
import './App.css';
import TaskAdder from './components/TaskAdder/TaskAdder';
import TaskViewerMapper from './components/TaskViewerMapper/TaskViewerMapper';

export interface Todo{
  index:number;
  title:string;
  Done:Boolean;
 
}

const App:React.FC=()=>{
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);
  const handleAdd=(e: React.FormEvent)=>{
      e.preventDefault();
      if(todo!=="")
      setTodos([...todos,{index:Date.now(),title:todo,Done:false}]);
      setTodo("");

  }
  
 
  return (
    <div className="App">
      <div className="heading">TODO LIST</div>
      <TaskAdder todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TaskViewerMapper todos={todos} setTodos={setTodos}></TaskViewerMapper>
    </div>

  );
}

export default App;
