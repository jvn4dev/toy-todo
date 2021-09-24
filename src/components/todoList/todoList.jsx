import React from 'react';
import Todo from '../todo/todo';

import styles from './todoList.module.css';

const TodoList = ({ todos, handleComplete }) => {
  return todos.map((todo) => {
    return (
      <div key={todo.id} className={styles.container}>
        <Todo todo={todo} handleComplete={handleComplete} />
      </div>
    );
  });
};

export default TodoList;
