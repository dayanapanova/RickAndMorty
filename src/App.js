import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import { Navigation } from '@/components';
import {Home} from '@/containers';
import { theme } from '@/constants'
import BrowserHistory from '@/BrowserHistory';

const PageContent = styled.div`
    padding-left: ${({ theme })=> theme.sizes.sideBarWidth + 20}px;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={BrowserHistory}>
        <Navigation />
        <PageContent>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </PageContent>
      </Router>
    </ThemeProvider>
  );
}

export default App;
