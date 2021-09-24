import React, { useState } from 'react';
import styles from './footer.module.css';

const Footer = ({ handleTodos }) => {
  const [input, setInput] = useState('');

  const onClick = (e) => {
    e.preventDefault();
    input && handleTodos(input);
    setInput('');
  };

  const onChange = (e) => {
    setInput(e.currentTarget.value);
  };

  return (
    <form className={styles.container}>
      <button className={styles.button} type="submit" onClick={onClick}>
        +
      </button>
      <input
        className={styles.input}
        type="text"
        placeholder="새로운 할일"
        value={input}
        onChange={onChange}
      />
    </form>
  );
};

export default Footer;
