import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider,css } from 'styled-components'
import { Provider as MobxProvider } from 'mobx-react';
import { Navigation } from '@/components';
import {Episodes , Characters,SingleCharacter,SingleEpisode} from '@/containers';
import { theme } from '@/constants'
import BrowserHistory from '@/BrowserHistory';
import rootStore from '@/stores';

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

export const store = rootStore.create({
  episodesState: {
    episodesList: [],
  },
  charactersState: {
    charactersList: [],
    singleCharacter: {},
  }
})

const App = () => {
  return (
    <MobxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={BrowserHistory}>
          <Navigation />
          <PageContent>
            <Switch>
              <Route path='/' exact={true} component={Episodes} />
              <Route path='/characters' exact={true} component={Characters} />
              <Route path='/characters/:id' exact={true} component={SingleCharacter}/>
              <Route path='/episodes/:id' exact={true} component={SingleEpisode}/>
            </Switch>
          </PageContent>
        </Router>
      </ThemeProvider>
    </MobxProvider>
  );
}

export default App;
