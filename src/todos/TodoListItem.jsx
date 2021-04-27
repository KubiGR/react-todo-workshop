import "./TodoListItem.css";
import svgCheck from "./../assets/check-mark.svg";
import svgDelete from "./../assets/delete.svg";
import svgEdit from "./../assets/edit.svg";

const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <h2 className="todo-text">{todo.text}</h2>
      <div className="todo-buttons-container">
        <button className="completed-button">
          <img src={svgCheck} alt="Complete todo" className="icon" />
        </button>
        <button className="edit-button">
          <img src={svgEdit} alt="Edit todo" className="icon" />
        </button>
        <button className="remove-button">
          <img src={svgDelete} alt="Remove todo" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
