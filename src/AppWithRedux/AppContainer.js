import React from 'react';
import { App } from './App';
import { incrementAC, decrementAC } from './reducers/reducer';

const AppContainer = ({
  store
}) => {
  const appState = store.getState();

  const onIncrement = () => {
    store.dispatch(incrementAC());
  }

  const onDecrement = () => {
    store.dispatch(decrementAC());
  }

  return <App count={appState.counterState.count} onIncrement={onIncrement} onDecrement={onDecrement}/>
}

export default AppContainer;