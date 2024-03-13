import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Todoform from './Todoform'
import Table from './table'

function Home() {

    const [todos, setTodos] = useState("")
    const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    fetchData()
   }, [])

  const fetchData = async () => {
    try {
      axios.get(('http://127.0.0.1:8000/api/todo/')).then((response)=>{
        const reversedArray = response.data.slice().reverse();
        setTodos(reversedArray)
        setisLoading(false)
      });
      
    } catch (error) {
      console.log(error);
    }
} 

  return (
    <div>
        <Todoform
        setTodos={setTodos}
        fetchData={fetchData}
      />
      <Table
        todos={todos}
        isLoading={isLoading}
        setTodos={setTodos} />
    </div>
  )
}

export default Home