import { Component } from "react";
import "./App.css";
import TodoList from "./todos/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
