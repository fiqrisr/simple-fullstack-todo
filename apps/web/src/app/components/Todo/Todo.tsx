import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Checkbox } from '@simple-fullstack-todo/ui';

/* eslint-disable-next-line */
export interface TodoProps {
  id: string;
  text: string;
  done: boolean;
  setTodo: (id: string, done: boolean) => void | Promise<void>;
  changeTodo: (id: string, text: string) => void | Promise<void>;
  deleteTodo: (id: string) => void | Promise<void>;
}

export const Todo: React.FC<TodoProps> = ({
  id,
  text,
  done,
  setTodo,
  changeTodo,
  deleteTodo,
}) => {
  const [inputText, setInputText] = useState(text);
  const debouncedText = useDebouncedCallback(
    (value) => changeTodo(id, value),
    500
  );

  return (
    <div className="flex py-2 px-8 items-center">
      <Checkbox checked={done} onChange={() => setTodo(id, !done)} />
      <input
        className="flex-1 px-3 py-1 mx-2 w-full text-purple-500 outline-purple-300 rounded-lg"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          debouncedText(e.target.value);
        }}
      />
      <i
        className="icon-trash-empty text-purple-400 hover:text-purple-600 hover:cursor-pointer"
        onClick={() => deleteTodo(id)}
      ></i>
    </div>
  );
};

export default Todo;
