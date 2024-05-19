
import React, { useState } from 'react'
import { useTodo } from '../contexts';

const TodoForm = () => {
    const [todos,setTodos] = useState('') ;
    const {addTodo} = useTodo() ;

    const add = (e) =>{
        e.preventDefault() ;
        if(!todos) return ;
        addTodo({todos,completed : false}) ;
        setTodos('')
    }
  return (
    <form onSubmit={add} className='flex'>
        <input
        type='text'
        value={todos}
        placeholder='enter your task'
        onChange={(e)=>e.target.value}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5" />


  <button 
  type='submit'
  className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
    Add 
  </button>

    </form>
  )
}

export default TodoForm