import React from "react";

function Footer({ todos, setTodos, active, setActive, menus }) {
  
  const clearAllCompleted = () =>
    setTodos(todos.filter(item => !item.completed));

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.length}</strong> items left
        </span>

        <ul className="filters">
          {menus.map((item, index) => (
            <li key={index}>
              <a
                onClick={() => setActive(item)}
                className={active === item ? "selected" : ""}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => clearAllCompleted()} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
