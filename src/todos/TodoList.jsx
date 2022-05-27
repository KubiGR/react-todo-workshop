import { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todoList: [],
  //   };
  //   this.idCounterRef = createRef(0);
  // }

  // componentDidMount() {
  //   document.title = `Todos: ${this.state.todoList.length}`;
  // }

  // componentDidUpdate() {
  //   document.title = `Todos: ${this.state.todoList.length}`;
  // }

  // addTodo = (todo) => {
  //   const newTodoList = this.state.todoList.concat({
  //     ...todo,
  //     id: this.idCounterRef.current,
  //     completed: false,
  //   });
  //   this.setState({ todoList: newTodoList });
  //   this.idCounterRef.current++;
  // };

  render() {
    return (
      <div className="list-wrapper">
        <NewTodoForm addTodo={this.addTodo} />
        <div className="list-scrollable">
          {/* {this.state.todoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              removeTodo={this.removeTodo}
              editTodo={this.editTodo}
            />
          ))} */}
        </div>
      </div>
    );
  }
}

export default TodoList;
