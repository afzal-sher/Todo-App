import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import "./TodoApp.css"

export const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [timedate, settimedate] = useState("");
  const handleinputchange = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (todos.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTodos((prevTodos) => [...prevTodos, inputValue]);
    setInputValue("");
  };
   const handleDelete = (curTask) =>{
    const newtodos = todos.filter(( curElement , index) => curElement !== curTask)
    setTodos(newtodos)
   }
   const handleCleartodo = () =>{
    setTodos([])
   }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const formatDate = now.toLocaleDateString();
      const formatTime = now.toLocaleTimeString();
      settimedate(`${formatDate}-${formatTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2>{timedate}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleinputchange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn"> 
              Add task
            </button>
          </div>
        </form>
      </section>
      <section>
        <ul>
          {todos.map((curTask, index) => {
            return (
              <li key={index}>
                <span>{curTask}</span>
                <button onClick={() => handleDelete(curTask)} className="delete-btn">
                  <MdDeleteForever />
                </button>
                <button className="check-btn">
                  <MdCheck />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <button onClick={handleCleartodo}>Clear All</button>
      </section>
    </section>
  );
};
