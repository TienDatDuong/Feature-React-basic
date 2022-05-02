import React from "react";

function Todo({ todos, Alltodo,deleteDataTodo }) {
  const handleDelete = (id) => {
    deleteDataTodo(id)
  }
  return (
    <>
      <div>{Alltodo}</div>
      <ul>
        {todos.map((todo, index) => {
          return(
            <div  key={todo.id}>
              <li>{todo.title} 
              <span onClick={()=>handleDelete(todo.id)}>  x</span>
              </li>
            </div>
            
          ) 
        })}
      </ul>
    </>
  );
}

export default Todo;
