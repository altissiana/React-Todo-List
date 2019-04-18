import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { updateFilter, clearCompleted } from "../actions/todoActions";
import { connect } from "react-redux";

class TodoList extends Component {
  changeFilter = filter => {
    updateFilter(filter);
  };

  clearCompleted = e => {
    e.preventDefault();
    clearCompleted();
  };

  render() {
    return (
      <div id="box">
        <ul>
          {this.props.todos
            .filter(todo => {
              if (this.props.filter === "all") {
                return true;
              }
              return todo.status === this.props.filter;
            })
            .map(item => (
              <TodoItem {...item} />
            ))}
        </ul>
        <div id="bottom">
          <p>
            {this.props.todos.filter(todo => todo.status === "pending").length}{" "}
            items left
          </p>
          <div>
            <button onClick={() => this.changeFilter("all")}>Show All</button>
            <button onClick={() => this.changeFilter("pending")}>
              Show Pending
            </button>
            <button onClick={() => this.changeFilter("completed")}>
              Show Completed
            </button>
            {this.props.todos.filter(todo => todo.status === "completed")
              .length > 0 ? (
              <button onClick={this.clearCompleted}>Clear Completed</button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    todos: appState.todos,
    filter: appState.filter
  };
}

export default connect(mapStateToProps)(TodoList);
