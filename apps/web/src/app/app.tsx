import { AppBar, AppLayout, Icon, Button } from '@simple-fullstack-todo/ui';

import TodoList from './components/TodoList/TodoList';
import { useTodo } from './hooks/useTodo';

const App = () => {
  const { todos, addTodo, setTodo, changeTodo, deleteTodo } = useTodo(
    'http://localhost:3333/api/todo'
  );

  return (
    <AppLayout>
      <AppBar title="Fullstack Todo" />
      <TodoList
        todos={todos}
        setTodo={setTodo}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
      />
      <Button onClick={() => addTodo('')}>
        <Icon icon="plus" /> New Task
      </Button>
    </AppLayout>
  );
};

export default App;
