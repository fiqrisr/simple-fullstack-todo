import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { TodoInterface } from '@simple-fullstack-todo/ui';

export const useTodo = (baseUrl: string) => {
  const [todos, setTodos] = useState<Required<TodoInterface>[]>([]);

  const getTodo = useCallback(async () => {
    const { data } = await axios.get<Required<TodoInterface>[]>(`${baseUrl}`);

    setTodos(data);
  }, [baseUrl]);

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const setTodo = useCallback(
    async (id: string, done: boolean) => {
      await axios.patch(`${baseUrl}/${id}/set`, {
        done,
      });

      getTodo();
    },
    [baseUrl, getTodo]
  );

  const changeTodo = useCallback(
    async (id: string, text: string) => {
      await axios.patch(`${baseUrl}/${id}`, {
        text,
      });

      getTodo();
    },
    [baseUrl, getTodo]
  );

  return { todos, setTodo, changeTodo };
};
