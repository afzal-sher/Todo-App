import { useState } from "react";

export const TodoForm = ({onAddTodo}) =>{
  

     const [inputValue, setInputValue] = useState({})
     const handleinputchange = (value) => {
    setInputValue({id:value, content: value, cheecked: false});
  };

  const handleFormSubmit = (event) =>{
    event.preventDefault();
  onAddTodo(inputValue)
    setInputValue({id: "", content: "", cheecked: false}); // Reset input after submission

  } 
    return(

        <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue.content}
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
    )
}