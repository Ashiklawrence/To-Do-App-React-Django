import React,{useState} from 'react'
import './Todoform.css'
import axios from 'axios'

function Todoform({ setTodos, fetchData }) {
    const [newTodo, setNewTodo] = useState({'body': ''})

    const handleChange = (e) => {
        setNewTodo(prev => ({...prev,'body': e.target.value}))
    }
    const postTodo = async () => {
        if (newTodo.body!==''){
            try {
                axios.post(`http://127.0.0.1:8000/api/todo/`, newTodo).then(()=>{
                setNewTodo({ 'body': '' })
                setTodos(prevTodos => [...prevTodos, newTodo])
                fetchData()
                })
                
            } catch (error) {
                console.log(error);
            }
        }
        
    }
  return (
    <div className='row justify-content-center' id='inptrow'>
    <input className="form-control mr-sm-2" 
    value={newTodo.body} onChange={handleChange}  onKeyDown={(e) => {
        if (e.key === 'Enter') {
            postTodo();
        }
    }} id='srchbar' type="search" placeholder="Enter task..." aria-label="Search"/>
    <button onClick={postTodo} className="btn btn-primary" id='dtlsbtn'>Add todo</button>
    </div>
  )
}

export default Todoform