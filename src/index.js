import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './Components/App';
import Play from './Components/Board/Play';
import Start from './Components/Board/Start';
import Memorize from './Components/Board/Memorize';

import Blocks from './Models/Blocks';

import './index.css';

const board = new Blocks();

render((
  <Provider board={board}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Start}/>
      <Route path="memorize" component={Memorize} />
      <Route path="play" component={Play}/>
      <Route path="*" component={Start}/>
    </Route>
  </Router>
  </Provider>
), document.getElementById('root'));
