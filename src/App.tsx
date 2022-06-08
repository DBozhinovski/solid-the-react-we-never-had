import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import { Clock } from './Clock';
import Gallery from './Gallery';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        {/* <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a> */}
        {/* <Clock /> */}
        <Gallery />
      </header>
    </div>
  );
};

export default App;