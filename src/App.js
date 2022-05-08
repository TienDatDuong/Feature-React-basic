import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Covid from "./views/Covid";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CountDown from "./CountDown";
import Todo from "./views/Todo";
// import Todo from "./views/Todo";
//  npm install --save-exact react-router-dom@5.3.0
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
    <Router>
      <div className="bg-indigo-900 h-screen text-white">
        <div className="App">
          <Nav />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/timer"  >
              {/* <Users /> */}
              <CountDown />
            </Route>
            <Route path="/todo" >
              <Todo
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
              </button>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
