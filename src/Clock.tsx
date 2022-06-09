import { Component, createSignal } from 'solid-js';

const getCurrentTime = () => {
  const d = new Date();
  const hours = `0${d.getHours()}`.slice(-2);
  const minutes = `0${d.getMinutes()}`.slice(-2);
  const seconds = `0${d.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
};

export const Clock: Component = () => {
  const [time, setTime] = createSignal(getCurrentTime());

  setInterval(() => {
    setTime(getCurrentTime());
  }, 1000);

  return (
    <div>
      <h1>{time()}</h1>
    </div>
  );
};
