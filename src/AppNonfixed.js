import React from 'react';
import './App.css';

export const App = () => {

  let count = 0;

  const onDecrement = () => {
    count--;
  }

  const onIncrement = () => {
    count++;
  }

  return (
    <div className="wrapper">
      <h1>Нерабочая функция</h1>
      <div className="wrapper-buttons">
        <button className="button" onClick={onDecrement}>-</button>
        <div className="counter">{count}</div>
        <button className="button" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}
