import React from 'react';

import styles from './todo.module.css';

const Todo = ({ todo, handleComplete }) => {
  return (
    <div className={styles.container}>
      <input
        id={todo.id}
        className={styles.checkbox}
        type="checkbox"
        onChange={() => handleComplete(todo.id)}
      />
      <label htmlFor={todo.id} className={styles.label}></label>

      <span
        className={`${styles.text} ${
          todo.completed === true ? styles.checked : styles.unchecked
        }`}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default Todo;
