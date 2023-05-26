import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducers";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  const buttonAlt = (e) => {
    if (e.key == "Enter") {
      add();
    }
  };

  return (
    <div className=" d-flex gap-2 mb-3 addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => buttonAlt(e)}
        className="form-control todo-input"
        placeholder="What's the plan?"
        value={todo}
      />

      <button className="btn primary" onClick={() => add()}>Add</button>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);