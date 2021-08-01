import { useCallback, useMemo, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [inputText, setInputText] = useState("");

  const listSize = useMemo(() => toDoList.length, [toDoList]);

  const handleAdd = useCallback(() => {
    if (toDoList.includes(inputText)) {
      alert("Tarefa já incluída");
    } else if (inputText === "") {
      alert("Digite um valor válido");
    } else {
      setToDoList([...toDoList, inputText]);
    }
  }, [inputText, toDoList]);

  const handleInput = useCallback((event) => {
    setInputText(event.target.value);
  });

  useEffect(() => {
    const storage = localStorage.getItem("to-do");

    if (storage) {
      setToDoList(JSON.parse(storage));
    }

    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem("to-do", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="container">
      <header className="app-header">
        <h1>To-Do List Component</h1>
      </header>

      <main className="app-content">
        <form onSubmit={handleAdd} className="app-form">
          <input
            data-cy="input-to-do"
            className="app-input"
            placeholder="Digite um novo To Do:"
            onChange={handleInput}
            type="text"
            value={inputText}
          />

          <button data-cy="btn-add" className="app-button" type="submit">
            OK
          </button>
        </form>

        <h1>{listSize}</h1>

        <ul className="app-list">
          {toDoList.map((toDo) => (
            <li data-cy="to-do-row" key={toDo} className="to-do-item">
              {toDo}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
