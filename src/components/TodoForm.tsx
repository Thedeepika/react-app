import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface Props {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Control type="text" placeholder="Add a new task..." value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="submit" className="ms-2">Add</Button>
    </Form>
  );
};

export default TodoForm;
