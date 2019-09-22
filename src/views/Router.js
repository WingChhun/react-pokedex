import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from "../App";


function AppRouter(props) {

  return (

    <Router>


      <Route exact path={'/'} component={App} />
    </Router>


  )

}


export default AppRouter;