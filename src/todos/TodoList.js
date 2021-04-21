import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { useState, useRef } from "react";
import CompletedTodoListItem from "./CompletedTodoListItem";

const TodoList = () => {
  const [todoList, setTodosList] = useState([]);
  const [completedTodoList, setCompletedTodoList] = useState([]);

  const idCounterRef = useRef(0);

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
      <hr />
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
