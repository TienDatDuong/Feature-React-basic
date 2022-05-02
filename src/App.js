import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

function App() {
const [name,setName] = useState("datdt")
const [address,setAddress] = useState("")
  const handlerSubmit = (e) => {
      setName(address)
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
        <input type="text" value={address} onChange={e => handlerClickinput(e)} className="text-black"/>
        <button type="button" onClick={e => handlerSubmit(e)}>ClickMe</button>
      </header>
    </div>
  );
}

export default App;
