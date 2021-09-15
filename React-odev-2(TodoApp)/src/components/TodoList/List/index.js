import { useState } from "react";
import Footer from "../Footer/footer";

function List({ todos, setTodos, active, setActive }) {
  const [activeTodos, setActiveTodos] = useState(false);
  const menus = ["All", "Active", "Completed"];

  const markTodo = (todo) => {
    setTodos(
      todos.map((element) =>
        element.id === todo.id
          ? { ...element, completed: !element.completed }
          : element
      )
    );
  };

  const deleteTodo = (todo) =>
    setTodos(todos.filter((item) => item.id !== todo.id));

  const checkedAll = () => {
    const isCompleted = !activeTodos;
    setActiveTodos(isCompleted);
    setTodos(
      todos.map((item) => {
        item.completed = isCompleted;
        return item;
      })
    );
  };

  return (
    <div>
      <section className="main">
        <input
          id="toggleAll"
          type="checkbox"
          className="toggle-all"
          onChange={() => checkedAll()}
        />
        <label htmlFor="toggleAll">Mark all as complete</label>

        <ul className="todo-list">
          {todos.map((todo, id) => (
            <li key={id} className={todo.completed ? "completed" : "active"}>
              <div className="view">
                <input
                  type="checkbox"
                  className="toggle"
                  checked={todo.completed}
                  onClick={() => markTodo(todo)}
                />
                <label>{todo.text}</label>
                <button
                  className="destroy"
                  onClick={() => deleteTodo(todo)}
                ></button>
              </div>
            </li>
          ))}
        </ul>

        <Footer
          menus={menus}
          todos={todos}
          active={active}
          setTodos={setTodos}
          setActive={setActive}
        />
      </section>
    </div>
  );
}

export default List;
