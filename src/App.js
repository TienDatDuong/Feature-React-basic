import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

function App() {
const [name,setName] = useState("datdt")
const [address,setAddress] = useState("")
const [todos,setTodos] = useState([])
  const handlerSubmit = (e) => {
    if(!address){
      alert("sytem")
      return;
    }
    setTodos([...todos,address])
    setAddress("")
  }
  const handlerClickinput = (e) =>{
      setAddress(e.target.value)
  }

  return (
  
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello would with Reqact and {name} !</h1>
       <Todo todos={todos}/>
        <input type="text" value={address} onChange={e => handlerClickinput(e)} className="text-black"/>
        <button type="button" onClick={e => handlerSubmit(e)}>ClickMe</button>
      </header>
    </div>
  );
}

export default App;
