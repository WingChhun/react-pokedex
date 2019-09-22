import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Main, Detailed } from './views';
import LocalStorageMgr from './common/LocalStorageMgr';

LocalStorage.Mgrinit();
function AppRouter(props) {
  //todo: /detailed should have a unique id associated with the URL
  return (
    <Router>
      <Route exact path={'/'} component={Main} />
      <Route path={'/detailed'} component={Detailed} />
    </Router>
  );
}

export default AppRouter;
