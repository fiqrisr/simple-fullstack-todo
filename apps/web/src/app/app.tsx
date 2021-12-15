import { useState, useEffect, useCallback } from 'react';
import axios from 'redaxios';
import {
  AppBar,
  AppLayout,
  Icon,
  TodoList,
  Button,
  TodoInterface,
} from '@simple-fullstack-todo/ui';

const App = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const getTodo = useCallback(async () => {
    const { data } = await axios.get<TodoInterface[]>(
      'http://localhost:3333/api/todo'
    );

    setTodos(data);
  }, []);

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const checkTodo = useCallback(async (e) => {
    await axios.patch(`http://localhost:3333/api/todo/${e.target.id}/set`, {
      done: e.target.done,
    });
  }, []);

  const changeTodo = useCallback(async (e) => {
    await axios.patch(`http://localhost:3333/api/todo/${e.target.id}`, {
      text: e.target.value,
    });
  }, []);

  return (
    <AppLayout>
      <AppBar title="Fullstack Todo" />
      <TodoList
        todos={todos}
        onChecked={(e) => checkTodo}
        onTodoChange={(e) => changeTodo}
      />
      <Button>
        <Icon icon="plus" /> New Task
      </Button>
    </AppLayout>
  );
};

export default App;
