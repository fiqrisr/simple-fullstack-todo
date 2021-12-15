import React from 'react';
import { Checkbox } from '@simple-fullstack-todo/ui';

/* eslint-disable-next-line */
export interface TodoProps {
  text: string;
  done: boolean;
}

export const Todo: React.FC<TodoProps> = ({ text, done }) => {
  return (
    <div className="flex py-2 px-8 items-center">
      <Checkbox checked={done} />
      <input
        className="flex-1 px-3 py-1 mx-2 w-full text-purple-500 outline-purple-300 rounded-lg"
        value={text}
      />
      <i className="icon-trash-empty text-purple-400 hover:text-purple-600 hover:cursor-pointer"></i>
    </div>
  );
};

export default Todo;
