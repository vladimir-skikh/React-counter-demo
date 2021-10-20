import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import AppContainer from './AppWithRedux/AppContainer';
import { reducer } from './AppWithRedux/reducers/reducer';
import './index.css';

const rootReducer = combineReducers({
  counterState: reducer
})
const store = createStore(rootReducer);

const render = () => {
  ReactDOM.render(
    <AppContainer store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => {
  render();
});

render();