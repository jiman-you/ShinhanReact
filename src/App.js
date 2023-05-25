import logo from './logo.svg';
import './App.css';
import Header from './components1/Myheader';
import Mynavigation from './components1/Mynavigation';
import Mysection from './components1/Mysection';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>JSX(JavaScript XML)</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 배우기
        </a>
      </header>
      <Header></Header>
        <Mynavigation/>
        <Mysection/>
    </div>
  );
}

export default App;
