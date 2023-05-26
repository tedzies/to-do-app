import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  editTodos,
} from "../redux/reducers";
import TodoItem from "./todoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    editTodo: (obj) => dispatch(editTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("all");
  return (
    <div className="d-flex flex-column align-items-center gap-3 displaytodos">
      <div className="d-flex gap-3 my-3 buttons">
        <button className="btn secondary" onClick={() => setSort("active")}>
          Active
        </button>
        <button className="btn btn-success" onClick={() => setSort("completed")}>
          Completed
        </button>
        <button className="btn primary" onClick={() => setSort("all")}>
          All
        </button>
      </div>
      <ul className="list-group-flush p-0">
        {/* for all items */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    editTodo={props.editTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}

        {/* for active items */}
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      editTodo={props.editTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}

        {/* for completed items */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      editTodo={props.editTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}        
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);