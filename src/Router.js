import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Detailed } from './views';
import LocalStorageMgr from './common/LocalStorageMgr';

LocalStorageMgr.init();
class AppRouter extends Component {
  //todo: /detailed should have a unique id associated with the URL

  componentDidMount() {
    //event listener to cache SESSION
    window.addEventListener('beforeunload', e => {
      e.preventDefault(); //fixme: what exactly does this prevent
      LocalStorageMgr.cacheOnClose();
    });
  }

  render() {
    return (
      <Router>
        <Route exact path={'/'} component={Main} />
        <Route path={'/detailed/:id'} component={Detailed} />
      </Router>
    );
  }
}

export default AppRouter;
