import { useState } from "react";

import "./TodoApp.css";
import { TodoForm } from "./todoform";
import { TodoList } from "./TodoList";
import { TodoData } from "./TodoData";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleFormSubmit = (inputValue) => {
  const  {id, content, cheecked} = inputValue;
    if (!content) return;
    // if (todos.includes(inputValue)) return; this is not work in array of object
    //                  NOW
    // we can use some() and find() for it
    const ifTodoContentmatched = todos.find(
      (curTodo) => curTodo.content === content
    );
    if (ifTodoContentmatched) return;

    setTodos((prevTodos) => [...prevTodos, { id, content, cheecked }]);
  };
  const handleDelete = (Value) => {
    const newtodos = todos.filter(
      (curElement) => curElement.content !== Value
    );
    setTodos(newtodos);
  };
  const handleCleartodo = () => {
    setTodos([]);
  };
  
  const handlecheektodo = (task) => {
const updatedTodos = todos.map((curTask) => {
      if (curTask.content === task) {
        return { ...curTask, cheecked: !curTask.cheecked }; // Toggle the 'cheecked' property
      } else{
        return curTask
      }
      
    });
    setTodos(updatedTodos);
  }
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoData />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section>
        <ul>
          {todos.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                Data={curTask.content}
                onhandleDeleteTodo={handleDelete}
                cheecked={curTask.cheecked}
                onhandleCheckTodo={handlecheektodo}
              />
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
