import React from 'react';
import './App.css';

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {count: 0};
  }

  onDecrement = () => {
    this.setState(state => ({count: --state.count}));
  }

  onIncrement = () => {
    this.setState(state => ({count: ++state.count}));
  }

  componentDidMount() {
    console.log('вмонтирован');
  }

  componentDidUpdate() {
    console.log('обновлён');
  }

  render() {
    console.log('рендер');
    return (
      <div className="wrapper">
        <h1>Методы жизненного цикла</h1>
        <div className="wrapper-buttons">
          <button className="button" onClick={this.onDecrement}>-</button>
          <div className="counter">{this.state.count}</div>
          <button className="button" onClick={this.onIncrement}>+</button>
        </div>
      </div>
    );
  }
}
