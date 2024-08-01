
import React, { useState } from 'react'

const Todo = () => {
    const [todos,setTodos] = useState([]) ;
    const [text,setText] = useState('') ;
    const [editIndex,setEditIndex] = useState(null) ;

    const handleChange = (e) =>{
       setText(e.target.value)
    }

    const handleAdd = () =>{
if(text===""){
    alert('Enter some text') ;
    return
}
if(todos.includes(text)){
alert(`${text} already present`) ;
return setText('')
}
if(editIndex!==null){
    const updatedTodos = [...todos] ;
    updatedTodos[editIndex] = text ;
    setTodos(updatedTodos) ;
    setEditIndex(null)
}else{
    setTodos([...todos,text])
}
setText('')
    }

    const handleEdit = () =>{

    }

    const handleDelete = () =>{

    }

  return (
    <div>
        <h2>Todo App</h2> 
        <input
        type='text'
        value={text}
        onChange={handleChange} 
        placeholder='Enter your todo here'/>

        <button onChange={handleAdd}> Add </button>

        <ul>
        {todos.map((item,i)=>(
            <li> {item} </li>
        ))}

        <button onChange={handleEdit}> Edit </button>
        <button onChange={handleDelete}> Delete </button>
        </ul>

        
        


    </div>
    
  )
}

export default Todo