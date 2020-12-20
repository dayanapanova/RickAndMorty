import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import { Navigation } from '@/components';
import {Episodes , Characters} from '@/containers';

import { theme } from '@/constants'
import BrowserHistory from '@/BrowserHistory';

const PageContent = styled.div`
    padding: ${({ theme: { sizes: { pageGutter, sideBarWidth } } })=> `${pageGutter}px ${pageGutter}px ${pageGutter}px ${sideBarWidth + pageGutter}px`};
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={BrowserHistory}>
        <Navigation />
        <PageContent>
          <Switch>
            <Route path='/' exact component={Episodes} />
            <Route path='/characters' exact component={Characters} />
          </Switch>
        </PageContent>
      </Router>
    </ThemeProvider>
  );
}

export default App;
