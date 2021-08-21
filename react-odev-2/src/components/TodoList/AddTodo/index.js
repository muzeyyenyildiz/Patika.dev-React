import { useState, useEffect } from "react";

function AddTodo({ setTodos, todos }) {
  const defaultTodo = { id: Math.random(), text: "", completed: false };
  const [todoItem, setTodoItem] = useState(defaultTodo);

  useEffect(() => {
    setTodoItem(defaultTodo);
  }, [todos]);

  const onChangeInput = (event) => {
    setTodoItem({ ...todoItem, text: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (todoItem.text === "") {
      alert("Write something!");
      return false;
    }
    setTodos([...todos, todoItem]);
    console.log(todoItem);
  };

  return (
    <div className="search-input">
      <form onSubmit={onSubmit}>
        <input
          name="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={onChangeInput}
          autoFocus
          value={todoItem.text}
        />
      </form>
    </div>
  );
}

export default AddTodo;
