import axios from 'axios'
import React, { useState } from 'react'
import './Table.css'
import { MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

function Table({ todos, isLoading, setTodos }) {
  const [editText, setEditText] = useState({'body': ''})

  const handleDelete = (id) => {
    try {
      axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`).then(()=>{
        const newList = todos.filter(todo => todo.id !== id)
        setTodos(newList)
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = (id, value) => {
    try {
      axios.patch(`http://127.0.0.1:8000/api/todo/${id}/`, value).then((response)=>{
        const newTodos = todos.map(todo => todo.id === id ? response.data : todo)
        setTodos(newTodos)
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setEditText(prev => ({
      ...prev,
      'body': e.target.value
    }))
  }

  const handleClick = () => {
    handleEdit(editText.id, editText)
    setEditText({
      'body': ""
    })
  }

  const handleCheckbox = (id, value) => {
    console.log(value.completed);
    handleEdit(id, {
      'completed': !value
    })
  }
  return (
    <div className='row justify-content-center' >
      <div id='trow'>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Checkbox</th>
            <th scope="col">To Do</th>
            <th scope="col">Status</th>
            <th scope="col">Date Created</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? <div>Is Loading </div> :
            <> {todos.map((todoItem, index) =>
            (
              <tr key={todoItem.id} scope="row">
                <td >
                  <span onClick={() => handleCheckbox(todoItem.id, todoItem.completed)}
                    className='inline-block cursor-pointer'>{todoItem.completed === true ? <MdOutlineCheckBox /> :
                      <MdOutlineCheckBoxOutlineBlank />}
                  </span>
                </td>
                <td title={todoItem.id}>{todoItem.body}</td>
                <td>
                  <span className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${todoItem.completed ? "text-success" : "text-danger"}`}>
                    {todoItem.completed ? 'Done' : 'Incomplete'}
                  </span>
                </td>
                <td >{new Date(todoItem.created).toLocaleString()}</td>
                <td >
                  <span><label  htmlFor="exampleModalCenter" ><MdEditNote onClick={() => setEditText(todoItem)} type="button"  data-toggle="modal" data-target="#exampleModalCenter"/></label></span>
                  <span className=' text-xl cursor-pointer'><MdOutlineDeleteOutline onClick={() => handleDelete(todoItem.id)} /></span>

                </td>
              </tr>
            )
            )}</>}
        </tbody>
      </table>

      {/* Modal */}
     
      {/*  */}
    </div>
   
    {/* hihoijpojok */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edit Todo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <input id='srchbartbl' type="text" value={editText.body} onChange={handleChange} placeholder="Type here" />
      </div>
      <div class="modal-footer">
      <label htmlFor="exampleModalCenter" onClick={handleClick} className="btn" id='dtlsbtn' data-dismiss="modal">Save</label>
            <label htmlFor="exampleModalCenter" class="btn" id='dtlsbtn' data-dismiss="modal">Close</label>
      </div>
    </div>
  </div>
</div>
    </div>

  
  )
}

export default Table