import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { useState, useRef, useEffect } from "react";
import CompletedTodoListItem from "./CompletedTodoListItem";

const TodoList = () => {
  const [todoList, setTodosList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [completedTodoList, setCompletedTodoList] = useState(
    JSON.parse(localStorage.getItem("completedTodoList")) || []
  );

  const idCounterRef = useRef(0);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem(
      "completedTodoList",
      JSON.stringify(completedTodoList)
    );
  }, [completedTodoList]);

  const addTodo = (todo) => {
    const newTodoList = todoList.concat({
      ...todo,
      id: idCounterRef.current,
      completed: false,
    });
    setTodosList(newTodoList);
    idCounterRef.current++;
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((e) => id !== e.id).slice();
    setTodosList(newTodoList);
  };

  const completeTodo = (todo) => {
    const newTodoList = todoList.filter((e) => todo.id !== e.id).slice();
    setTodosList(newTodoList);
    const newCompletedTodoList = completedTodoList.concat(todo);
    setCompletedTodoList(newCompletedTodoList);
  };

  const removeCompletedTodo = (id) => {
    const newCompletedTodoList = completedTodoList
      .filter((e) => id !== e.id)
      .slice();
    setCompletedTodoList(newCompletedTodoList);
  };

  return (
    <div className="list-wrapper">
      <NewTodoForm addTodo={addTodo} />
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
      {completedTodoList.map((todo) => (
        <CompletedTodoListItem
          key={todo.id}
          todo={todo}
          removeCompletedTodo={removeCompletedTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
