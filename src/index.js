import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App';
import { store } from "./app/store";

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
};
render();
store.subscribe(render);