import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './App';
import Blocks from './Models/Blocks';
import './index.css';

const board = new Blocks();

ReactDOM.render(
  <Provider board={board}>
    <App />
  </Provider>,
  document.getElementById('root')
);
