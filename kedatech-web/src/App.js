import logo from './logo.svg';
import './App.css';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <Home/>
        </h1>
        
      </header>
    </div>
  );
}

export default App;
