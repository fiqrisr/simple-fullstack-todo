import React from 'react';
import { TodoInterface } from '@simple-fullstack-todo/ui';

import Todo from '../Todo/Todo';

/* eslint-disable-next-line */
export interface TodoListProps {
  todos: Required<TodoInterface>[];
  setTodo: (id: string, done: boolean) => void | Promise<void>;
  changeTodo: (id: string, text: string) => void | Promise<void>;
  deleteTodo: (id: string) => void | Promise<void>;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodo,
  changeTodo,
  deleteTodo,
}) => {
  return (
    <div className="w-full shadow-lg mt-3 mb-4">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
          setTodo={setTodo}
          changeTodo={changeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
