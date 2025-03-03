import React, { useState } from "react";
import { Todo } from "../types";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Container, ListGroup } from "react-bootstrap";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <h1 className="text-center my-4">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <ListGroup className="mt-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default TodoList;
