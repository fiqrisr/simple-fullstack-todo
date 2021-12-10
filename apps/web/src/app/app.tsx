import {
  AppBar,
  AppLayout,
  TodoList,
  Button,
  TodoInterface
} from '@simple-fullstack-todo/ui';

const todos: TodoInterface[] = [
  {
    id: '123',
    text: 'hello world',
    done: false
  },
  {
    id: '245',
    text: 'hello again',
    done: true
  }
];

const App = () => {
  return (
    <AppLayout>
      <AppBar title="Simple Todo" />
      <TodoList todos={todos} />
      <Button>New task</Button>
    </AppLayout>
  );
};

export default App;
