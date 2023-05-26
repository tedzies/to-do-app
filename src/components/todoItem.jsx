import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import { Icon } from '@iconify/react';

const TodoItem = (props) => {
  const { item, editTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.key == "Enter") {
      //13 = Enter key
      editTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  
  return (
    <Card className="my-2 card">
      {item.completed && <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
        Done
      </span>}
      <Card.Body className="">
        <li key={item.id} className="list-group-item border-0 p-0">
          <div className="d-flex flex-row justify-content-between align-items-center gap-3 list">
            <div className="d-flex flex-column">
              <Card.Text>
                <textarea
                className="form-control-plaintext border-0 p-2"
                rows="1"
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item.item}
                onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
                />
              </Card.Text>
            </div>
            <div className="d-flex justify-content-end gap-2 btns">
              <button className="btn edit" onClick={() => changeFocus()}><Icon icon="mdi:pencil" /></button>
              {item.completed === false && (
                <button className="btn check" onClick={() => completeTodo(item.id)}><Icon icon="mdi:check-all" /></button>
              )}
              <button className="btn delete" onClick={() => removeTodo(item.id)}><Icon icon="mdi:delete" />
              </button>
            </div>
          </div>
        </li>
      </Card.Body>
    </Card>
    
  );
};

export default TodoItem;