import React from 'react';
import { TodoInterface } from '../../models/todo';
import Todo from '../Todo/Todo';

/* eslint-disable-next-line */
export interface TodolistProps {
  todos: TodoInterface[];
}

export const TodoList: React.FC<TodolistProps> = ({ todos }) => {
  return (
    <div className="w-full shadow-lg my-3">
      {todos.map((todo) => (
        <Todo text={todo.text} done={todo.done} />
      ))}
    </div>
  );
};

export default TodoList;
