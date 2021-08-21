import { useState, useEffect } from "react";

function AddTodo({ setTodos, todos }) {
  const defaultTodo = { id: Math.random(), text: "", completed: false };
  const [todoItem, setTodoItem] = useState(defaultTodo);

  useEffect(() => {
    setTodoItem(defaultTodo);
  }, [todos]);

  const onChangeInput = event => setTodoItem({ ...todoItem, text: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    if (!todoItem.text.length) {
      alert("Not recommended to be empty!");
      return;
    }
    setTodos([...todos, todoItem]);
  };

  return (
    <div className="search-input">
      <form onSubmit={onSubmit}>
        <input
          autoFocus
          name="text"
          className="new-todo"
          value={todoItem.text}
          onChange={onChangeInput}
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  );
}

export default AddTodo;
