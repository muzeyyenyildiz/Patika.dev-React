import { useState, useEffect } from "react";
import "./style.css";
import AddTodo from "./AddTodo/index";
import List from "./List/index";

function ToDoList() {
  const [activeFilter, setActiveFilter] = useState("All");

  const _setActive = (selectedFilter) => {
    console.log(selectedFilter);
    setActiveFilter(selectedFilter);
  };

  const [todos, setTodos] = useState([
    {
      id: new Date().getTime(),
      text: "Learn React.",
      completed: false,
    },
    {
      id: Math.random(),
      text: "Learn Javascript.",
      completed: true,
    },
    {
      id: Math.random(),
      text: "Learn CSS.",
      completed: true,
    },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const filterTodoList = [...todos].filter((item) => {
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
        <AddTodo setTodos={setTodos} todos={filterTodoList} />
      </header>
      <section>
        <List
          todos={filterTodoList}
          setTodos={setTodos}
          active={activeFilter}
          setActive={_setActive}
        />
      </section>
    </div>
  );
}

export default ToDoList;
