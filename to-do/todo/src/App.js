import React, {useState} from 'react'; 
import './App.css';

function App() {

  const [value, setValue] = useState("");

  const submit = e => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };

  const [items, setItems] = useState([]);

  const addItem = text => {
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  const markDone = index => {
    const newItems = [...items];
    newItems[index].isDone = true;
    setItems(newItems);
  };

  return (

    <div className="App">
      <header className="App-header">
          ToDo
      </header>
      <body className="Body">
        Add a new todo:
        <form onSubmit={submit}>
          <input className="entryBox" type="text" value={value} onChange={e => setValue(e.target.value)} />
          <button onClick={submit}>Add</button>
        </form>
      </body>
      <div className="list">
        {items.map((item, index) => (
          <div className="done">
            {!item.isDone ? (<img className="pic" src={require('./noCheck.jpg')} />) : ""}
            {item.isDone ? (<img className="pic" src={require('./checkMark.jpg')} />) : ""}
            {item.text}            
            {!item.isDone ? (<button onClick={() => markDone(index)}>Mark as done</button>) : ""}
          </div>
        ))}
      </div>
      <footer className="Footer">
        2022
      </footer>
    </div>
  );
}

export default App;
