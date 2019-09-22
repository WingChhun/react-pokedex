import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Main, Detailed } from "./views";


//todo: detailed's route should hold the pokemon id
function AppRouter(props) {
  return (
    <Router>
      <Route exact path={'/'} component={Main} />
      <Route path={'/detailed'} component={Detailed} />
    </Router>
  );
}


export default AppRouter;