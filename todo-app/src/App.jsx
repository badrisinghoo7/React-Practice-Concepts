import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, DeleteTodo, UpdateTodo } from './store/action';

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([])
  const dispatch = useDispatch();
  const store = useSelector((store)=>store.todoReducer)
  console.log("Store hai ye",store);
  
  useEffect(() => {
    setTodo(store);
  }, [store])

 const handleAddTodo=()=>{
   const ID=new Date().getTime();
   const data={
     id:ID,
     text:input,
     complete:false
    }
   

  dispatch(AddTodo(data));
 }
  const handleDelete = (id) => {
    dispatch(DeleteTodo(id))
  }


  const handleUpdate = (id) => {
    dispatch(UpdateTodo(id))
  }
  return (
    <div>
      <h1>Todo - Application</h1>
      <div>
        <input type="text" placeholder='Add new todo here....' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div>
        <h1>Todo List</h1>
        <div>
          <table border={"true"}>
            <thead>
              <tr>
                <th>ID</th>
                <th>TODO Name</th>

                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                todo.map((item)=>{
                  return <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.text}</td>
                      <td>{item.complete?"completed":"Incompleted"}</td>
                      <td>
                        <button onClick={()=>handleUpdate(item.id)}>update</button>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                      </td>
                  </tr>
                })
              }
              
            </tbody>

          </table>

        </div>
      </div>
    </div>
  )
}

export default App
