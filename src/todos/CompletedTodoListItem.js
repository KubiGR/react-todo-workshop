import "./CompletedTodoListItem.css";
import svgCheck from "./../assets/check-mark.svg";

const CompletedTodoListItem = ({ todo, removeCompletedTodo }) => (
  <div className="completed-todo-item-container">
    <h3 className="todo-text">{todo.text}</h3>
    <div className="todo-buttons-container">
      <img src={svgCheck} alt="completed-todo-check" className="check-icon" />

      <button
        onClick={() => removeCompletedTodo(todo.id)}
        className="remove-button"
      >
        Remove
      </button>
    </div>
  </div>
);

export default CompletedTodoListItem;
