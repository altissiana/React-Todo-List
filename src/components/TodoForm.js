import React, { Component } from "react";
import { addTodo } from "../actions/todoActions";

class TodoForm extends Component {
  state = {
    todo: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todo !== "") {
      addTodo(this.state.todo);
    }
    this.setState({
      todo: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Todos</h3>
        <div id="form">
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            placeholder="Enter a todo item..."
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default TodoForm;
