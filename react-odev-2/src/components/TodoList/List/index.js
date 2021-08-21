import Footer from "../Footer/footer";

function List({ todos, setTodos, active, setActive }) {

  function getMyDefaultValue() {
    const activeTodos = todos.filter((item) => !item.completed);
    const completedTodos = todos.filter((item) => item.completed);

    return activeTodos.length > completedTodos.length;
  }

  const markTodo = (todo) => {
    setTodos(
      todos.map((el) =>
        el.id === todo.id ? { ...el, completed: !el.completed } : el)
    );
  };

  const deleteTodo = (todo) =>
    setTodos(todos.filter((item) => item.id != todo.id));

  const checkedAll = () => {
    const isCompleted = getMyDefaultValue();
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
          onChange={() => checkedAll()}
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todos.map((todo, i) => (
            <li key={i} className={todo.completed ? "completed" : "active"}>
              <div className="view">
                <input
                  checked={todo.completed ? "checked" : ""}
                  onClick={() => markTodo(todo)}
                  className="toggle"
                  type="checkbox"
                />
                <label> {todo.text} </label>
                <button
                  onClick={() => deleteTodo(todo)}
                  className="destroy"
                ></button>
              </div>
            </li>
          ))}
        </ul>

        <Footer
          active={active}
          setActive={setActive}
          todos={todos}
          setTodos={setTodos}
        />
      </section>
    </div>
  );
}

export default List;
