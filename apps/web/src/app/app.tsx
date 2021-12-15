import { AppBar, AppLayout, Icon, Button } from '@simple-fullstack-todo/ui';

import TodoList from './components/TodoList/TodoList';
import { useTodo } from './hooks/useTodo';

const App = () => {
  const { todos, setTodo, changeTodo } = useTodo(
    'http://localhost:3333/api/todo'
  );

  return (
    <AppLayout>
      <AppBar title="Fullstack Todo" />
      <TodoList todos={todos} setTodo={setTodo} changeTodo={changeTodo} />
      <Button>
        <Icon icon="plus" /> New Task
      </Button>
    </AppLayout>
  );
};

export default App;
