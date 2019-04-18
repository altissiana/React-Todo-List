import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/base.css";
import { BrowserRouter as Router } from "react-router-dom";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoForm />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
