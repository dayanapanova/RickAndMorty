import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Navigation } from '@/components';
import {Home} from '@/containers';
import BrowserHistory from '@/BrowserHistory';

const App = () => {
  return (
    <Router history={BrowserHistory}>
      <Navigation headerText='bubka'/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
