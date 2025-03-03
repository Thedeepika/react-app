import React from "react";
import { Todo } from "../types";
import { ListGroup, Button } from "react-bootstrap";

interface Props {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <span onClick={() => toggleComplete(todo.id)} style={{ cursor: "pointer" }}>
        {todo.text}
      </span>
      <Button variant="danger" onClick={() => deleteTodo(todo.id)}>Delete</Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
