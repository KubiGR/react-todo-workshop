import "./TodoListItem.css";

const TodoListItem = ({ todo, removeTodo, completeTodo }) => (
  <div className="todo-item-container">
    <h3 className="todo-text">{todo.text}</h3>
    <div className="todo-buttons-container">
      <button onClick={() => completeTodo(todo)} className="completed-button">
        Mark As Completed
      </button>
      <button onClick={() => removeTodo(todo.id)} className="remove-button">
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
