import React from 'react';
import './App.css';

export class App extends React.Component {

  count = 0;

  onDecrement = () => {
    this.count--;
    console.log(this.count);
  }

  onIncrement = () => {
    this.count++;
    console.log(this.count);
  }

  render() {
    console.log('рендер');
    return (
      <div className="wrapper">
        <h1>Нерабочий класс</h1>
        <div className="wrapper-buttons">
          <button className="button" onClick={this.onDecrement}>-</button>
          <div className="counter">{this.count}</div>
          <button className="button" onClick={this.onIncrement}>+</button>
        </div>
      </div>
    );
  }
}
