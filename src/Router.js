import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Detailed } from './views';
import LocalStorageMgr from './common/LocalStorageMgr';
import { PokemonProvider } from './common/context';

LocalStorageMgr.init();
class AppRouter extends Component {
  componentDidMount() {
    //event listener to cache SESSION
    window.addEventListener('beforeunload', e => {
      e.preventDefault(); //fixme: what exactly does this prevent
      LocalStorageMgr.cacheOnClose();
    });
  }

  render() {
    return (
      <PokemonProvider>
        <Router>
          <Route exact path={'/'} component={Main} />
          <Route path={'/detailed/:id'} component={Detailed} />
        </Router>
      </PokemonProvider>
    );
  }
}

export default AppRouter;
