import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
