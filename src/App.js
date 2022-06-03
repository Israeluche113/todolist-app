import React from 'react';
import './App.css';
import Input from './Components/Input';
import TodoItems from './Components/TodoItems';

import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <div className='app-container'>
        <div className='app-todoContainer'>
           {
             todoList.map(item => (
               <TodoItems 
                name={item.item}
                done={item.done}
                id={item.id}
               />
             ))
           }
        </div>

      <Input />
      </div>
    </div>
  );
}

export default App;
