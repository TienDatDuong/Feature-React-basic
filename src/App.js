import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Covid from "./views/Covid";
// import Todo from "./views/Todo";

function App() {
  const [name, setName] = useState("datdt");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([]);
  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };
  const handlerSubmit = (e) => {
    if (!address) {
      alert("sytem");
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 10000 + 1), title: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handlerClickinput = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello would with Reqact and {name} !</h1>
        <Covid/>
        {/* <Todo
          todos={todos}
          Alltodo={"All todos"}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(e) => handlerClickinput(e)}
          className="text-black"
        />
        <button type="button" onClick={(e) => handlerSubmit(e)}>
          ClickMe
        </button> */}
      </header>
    </div>
  );
}

export default App;
