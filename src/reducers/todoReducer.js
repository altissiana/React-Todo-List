const initialState = {
  todos: [],
  filter: "all"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.item, ...state.todos]
      };
    case "CHANGE_STATUS":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              text: todo.text,
              status: "completed",
              id: todo.id
            };
          } else {
            return todo;
          }
        })
      };
    case "UPDATE_FILTER":
      return { ...state, filter: action.filter };
    case "DELETE_ITEM":
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.id;
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.status !== "completed";
        })
      };
    default:
      return state;
  }
}
