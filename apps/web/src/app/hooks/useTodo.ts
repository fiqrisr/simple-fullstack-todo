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

  const addTodo = useCallback(
    async (text: string) => {
      await axios.post(`${baseUrl}`, {
        text,
      });

      getTodo();
    },
    [baseUrl, getTodo]
  );

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

  const deleteTodo = useCallback(
    async (id: string) => {
      await axios.delete(`${baseUrl}/${id}`);

      getTodo();
    },
    [baseUrl, getTodo]
  );

  return { todos, addTodo, setTodo, changeTodo, deleteTodo };
};
