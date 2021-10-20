import React from 'react';
import '../App.css';

export const App = ({
  count,
  onIncrement,
  onDecrement
}) => {
  return (
    <div className="wrapper">
      <h1>Redux компоненты</h1>
      <div className="wrapper-buttons">
        <button className="button" onClick={onDecrement}>-</button>
        <div className="counter">{count}</div>
        <button className="button" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}
