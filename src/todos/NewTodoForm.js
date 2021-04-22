import { useState, useEffect, useRef, useCallback } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const createTodo = useCallback(() => {
    if (inputValue === "") return;
    addTodo({ text: inputValue });
    setInputValue("");
    inputRef.current.focus();
  }, [addTodo, inputValue]);

  const handleKeydown = useCallback(
    (evt) => {
      if (evt.key === "Enter") {
        createTodo();
      }
    },
    [createTodo]
  );

  useEffect(() => {
    inputRef.current.focus();

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  return (
    <div className="new-todo-form">
      <input
        ref={inputRef}
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button" onClick={() => createTodo()}>
        Create Todo
      </button>
    </div>
  );
};

export default NewTodoForm;
