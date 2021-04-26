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

  const idCounterRef = useRef(
    JSON.parse(localStorage.getItem("idCounter")) || 0
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("idCounter", idCounterRef.current);
    document.title = `Todos: ${todoList.length}`;
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

  const removeTodo = (todo) => {
    const newTodoList = todoList.filter((e) => todo.id !== e.id).slice();
    setTodosList(newTodoList);
  };

  const editTodo = (todo, newText) => {
    const todoToEdit = todoList.find((e) => todo.id === e.id);
    todoToEdit.text = newText;
    setTodosList(todoList.slice());
  };

  const completeTodo = (todo) => {
    const newTodoList = todoList.filter((e) => todo.id !== e.id).slice();
    setTodosList(newTodoList);
    const newCompletedTodoList = completedTodoList.concat({
      ...todo,
      completed: true,
    });
    setCompletedTodoList(newCompletedTodoList);
  };

  const removeCompletedTodo = (todo) => {
    const newCompletedTodoList = completedTodoList
      .filter((e) => todo.id !== e.id)
      .slice();
    setCompletedTodoList(newCompletedTodoList);
  };

  return (
    <div className="list-wrapper">
      <NewTodoForm addTodo={addTodo} />
      <div className="list-scrollable">
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
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
    </div>
  );
};

export default TodoList;
