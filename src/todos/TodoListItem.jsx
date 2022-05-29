import svgCheck from "./../assets/check-mark.svg";
import svgDelete from "./../assets/delete.svg";
import svgEdit from "./../assets/edit.svg";
import { useState, useEffect, useRef } from "react";

const TodoListItem = ({ todo, removeTodo, completeTodo, editTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);
  const inputElementRef = useRef(null);

  useEffect(() => {
    if (editMode) inputElementRef.current.focus();
  }, [editMode]);

  useEffect(() => {
    const handleKeydown = (evt) => {
      if (editMode && evt.key === "Enter") {
        setEditMode(false);
        editTodo(todo, editInput);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [editInput, editMode, editTodo, todo]);

  return (
    <div className="todo-item-container">
      {editMode ? (
        <input
          ref={inputElementRef}
          className="edit-todo-input"
          type="text"
          placeholder={todo.text}
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
        />
      ) : (
        <h2 className="todo-text">{todo.text}</h2>
      )}
      <div className="todo-buttons-container">
        <button
          onClick={() => completeTodo(todo)}
          className="button complete-button"
        >
          <img src={svgCheck} alt="Complete todo" className="icon" />
        </button>
        <button
          onClick={() => setEditMode(true)}
          className="button edit-button"
        >
          <img src={svgEdit} alt="Edit todo" className="icon" />
        </button>
        <button
          onClick={() => removeTodo(todo)}
          className="button remove-button"
        >
          <img src={svgDelete} alt="Remove todo" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
