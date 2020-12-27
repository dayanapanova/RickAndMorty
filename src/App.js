import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider,css } from 'styled-components'
import { Navigation } from '@/components';
import {Episodes , Characters,SingleCharacter,SingleEpisode} from '@/containers';

import { theme } from '@/constants'
import BrowserHistory from '@/BrowserHistory';

const PageContent = styled.div`
    

    ${({ theme: { sizes: { pageGutter, sideBarWidth } } }) => css`
        @media ${theme.mediaQueries.mdUp} {
            padding:${pageGutter}px ${pageGutter}px ${pageGutter}px ${sideBarWidth + pageGutter}px;
        }
        @media ${theme.mediaQueries.smDown} {
            padding:80px 15px 15px 15px;
        }
        
    `};
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
            <Route path='/characters/:id' exact component={SingleCharacter}/>
            <Route path='/episodes/:id' exact component={SingleEpisode}/>
          </Switch>
        </PageContent>
      </Router>
    </ThemeProvider>
  );
}

export default App;
