import React from 'react';
import { Router, Switch, Route} from 'react-router';
import history from './history';

import './styles/global.scss'
import Home from './pages/Home'
import Modal from './cmps/Modal'

function App() {
  return (
    <div >
      <Modal/>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
