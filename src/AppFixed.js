import { useState } from 'react';
import './App.css';

export const App = () => {

  let [count, setCount] = useState(0);

  const onDecrement = () => {
    setCount(--count);
  }

  const onIncrement = () => {
    setCount(++count);
  }

  return (
    <div className="wrapper">
      <h1>Рабочая функция</h1>
      <div className="wrapper-buttons">
        <button className="button" onClick={onDecrement}>-</button>
        <div className="counter">{count}</div>
        <button className="button" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}
