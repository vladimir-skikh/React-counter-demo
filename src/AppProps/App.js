import React from 'react';
import '../App.css';
import Title from './Title';

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

  render() {
    return (
      <div className="wrapper">
        <Title title="Вложенный заголовок"/>
        <div className="wrapper-buttons">
          <button className="button" onClick={this.onDecrement}>-</button>
          <div className="counter">{this.state.count}</div>
          <button className="button" onClick={this.onIncrement}>+</button>
        </div>
      </div>
    );
  }
}
