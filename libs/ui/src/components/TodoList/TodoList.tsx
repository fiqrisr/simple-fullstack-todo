import React from 'react';
import { TodoInterface } from '../../models/todo';
import Todo, { TodoProps } from '../Todo/Todo';

/* eslint-disable-next-line */
export interface TodolistProps extends TodoProps {
  todos: TodoInterface[];
}

export const TodoList: React.FC<TodolistProps> = ({
  todos,
  onChecked,
  onTodoChange
}) => {
  return (
    <div className="w-full shadow-lg mt-3 mb-4">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          done={todo.done}
          onChecked={onChecked}
          onTodoChange={onTodoChange}
        />
      ))}
    </div>
  );
};

export default TodoList;
