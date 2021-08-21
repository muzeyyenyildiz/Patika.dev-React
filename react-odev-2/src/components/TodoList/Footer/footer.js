import React from "react";

function Footer({ todos, setTodos, active, setActive }) {
  
  const clearAllCompleted = () =>
    setTodos(todos.filter((item) => !item.completed));

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.length}</strong> items left
        </span>

        <ul className="filters">
          <li>
            <a
              onClick={() => {
                setActive("All");
              }}
              className={active === "All" ? "selected" : ""}
            >
              All
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActive("Active");
              }}
              className={active === "Active" ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <li>
            <a
              onClick={() => setActive("Completed")}
              className={active === "Completed" ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>

        <button onClick={() => clearAllCompleted()} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
