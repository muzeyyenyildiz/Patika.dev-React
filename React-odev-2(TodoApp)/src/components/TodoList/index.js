import { useState,} from "react";
import "./style.css";
import AddTodo from "./AddTodo/index";
import List from "./List/index";
import initialTodos from "./data";

function ToDoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [activeFilter, setActiveFilter] = useState("All");

  const _setActive = selectedFilter => setActiveFilter(selectedFilter);

  const filteredTodoList = [...todos].filter(item => {
    if (activeFilter === "All") {
      return true;
    } else if (activeFilter === "Completed" && item.completed) {
      return true;
    } else if (activeFilter === "Active" && !item.completed) {
      return true;
    }

    return false;
  });

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo setTodos={setTodos} todos={filteredTodoList} />
      </header>
      <section>
        <List
          setTodos={setTodos}
          active={activeFilter}
          setActive={_setActive}
          todos={filteredTodoList}
        />
      </section>
    </div>
  );
}

export default ToDoList;
