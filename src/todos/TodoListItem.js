import "./TodoListItem.css";
import svgCheck from "./../assets/check-mark.svg";
import svgDelete from "./../assets/delete.svg";

const TodoListItem = ({ todo, removeTodo, completeTodo }) => (
  <div className="todo-item-container">
    <h2 className="todo-text">{todo.text}</h2>
    <div className="todo-buttons-container">
      <button onClick={() => completeTodo(todo)} className="completed-button">
        <img src={svgCheck} alt="completed-todo-check" className="check-icon" />
      </button>
      <button onClick={() => removeTodo(todo.id)} className="remove-button">
        <img
          src={svgDelete}
          alt="completed-todo-check"
          className="check-icon"
        />
      </button>
    </div>
  </div>
);

export default TodoListItem;
