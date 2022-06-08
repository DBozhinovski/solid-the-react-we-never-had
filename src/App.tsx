import { Component, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [time, setTime] = createSignal('');
  
  const intl = setInterval(() => {
    const d = new Date();
    const hours = `0${d.getHours()}`.slice(-2);
    const minutes = `0${d.getMinutes()}`.slice(-2);
    const seconds = `0${d.getSeconds()}`.slice(-2);

    setTime(`${hours}:${minutes}:${seconds}`);
  })

  return (
    <div class={styles.App}>
      <h1>{time()}</h1>
    </div>
  );
};

export default App;
