import React from 'react';
import { TodoInterface } from '@simple-fullstack-todo/ui';

import Todo from '../Todo/Todo';

/* eslint-disable-next-line */
export interface TodoListProps {
  todos: Required<TodoInterface>[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="w-full shadow-lg mt-3 mb-4">
      {todos.map((todo) => (
        <Todo key={todo.id} text={todo.text} done={todo.done} />
      ))}
    </div>
  );
};

export default TodoList;
