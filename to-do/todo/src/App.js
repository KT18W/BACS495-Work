import React, {useState} from 'react'; 
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState("");

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputField = () => {
    setInputValue("");
  };

  return (
    <div className="App">
      <header className="App-header">
          ToDo
      </header>
      <body className="Body">
        Enter new todo item:  
        <input className="entryBox" type="text" value={inputValue} onChange={handleUserInput} />
        <button className="addButton" onClick={resetInputField}>Add</button>
      </body>
      <footer className="Footer">
        Footer stuffs
      </footer>
    </div>
  );
}

export default App;
