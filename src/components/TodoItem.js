import React, { Component } from "react";
import { changeStatus, deleteItem } from "../actions/todoActions";

class TodoItem extends Component {
  handleClick = e => {
    changeStatus(this.props.id);
  };

  delete = e => {
    e.preventDefault();
    deleteItem(this.props.id);
  };

  render() {
    return (
      <li
        className={this.props.status === "completed" ? "line" : ""}
        onClick={this.handleClick}
      >
        {this.props.text} - {this.props.status}
        <button id="x" onClick={this.delete}>
          X
        </button>
      </li>
    );
  }
}

export default TodoItem;
