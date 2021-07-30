import { useCallback, useState } from "react";

import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setToDoList([...toDoList, inputText]);
      setInputText("");
    },

    [toDoList, inputText]
  );

  const handleInputChange = useCallback((event) => {
    setInputText(event.target.value);
  }, []);

  return (
    <div className="container">
      <header className="app-header">
        <h1>To-Do List Component</h1>
      </header>

      <main className="app-content">
        <form onSubmit={handleSubmit} className="app-form">
          <input
            data-cy="input-to-do"
            className="app-input"
            placeholder="Digite um novo To Do:"
            onChange={handleInputChange}
            type="text"
            value={inputText}
          />

          <button data-cy="btn-add" className="app-button" type="submit">
            OK
          </button>
        </form>

        <ul className="app-list">
          {toDoList &&
            toDoList.map((toDo) => {
              return (
                <li data-cy="to-do-row" id={toDo} className="to-do-item">
                  {toDo}
                </li>
              );
            })}
        </ul>
      </main>
    </div>
  );
}

export default App;
