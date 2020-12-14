import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Navigation } from '@/components';
import {Home} from '@/containers';
import { theme } from '@/constants'
import BrowserHistory from '@/BrowserHistory';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={BrowserHistory}>
        <Navigation headerText='bubka'/>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
