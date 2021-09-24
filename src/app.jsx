import { useState } from 'react';
import styles from './app.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import TodoList from './components/todoList/todoList';

function App() {
  const todos = [
    {
      id: 1,
      text: '리덕스 툴킷 스터디',
      completed: false,
    },
    {
      id: 2,
      text: '밥 먹기',
      completed: false,
    },
    {
      id: 3,
      text: '샤워하기',
      completed: false,
    },
  ];

  const [todoList, setTodoList] = useState(todos);

  const handleTodos = (input) => {
    setTodoList((todoList) => {
      return [
        ...todoList,
        {
          id: Math.random().toString(36).substr(2, 16),
          text: input,
          completed: false,
        },
      ];
    });
  };

  const handleComplete = (id) => {
    setTodoList((todoList) => {
      return todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  return (
    <div className={styles.container}>
      <Header />
      <TodoList todos={todoList} handleComplete={handleComplete} />
      <Footer handleTodos={handleTodos} />
    </div>
  );
}

export default App;
