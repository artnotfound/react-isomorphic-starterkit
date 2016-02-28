import React from "react";
import {Router, Route} from "react-router";
import Main from "./Main";
import Page from '../components/Page';
import Page2 from '../components/Page2';

/**
 * The React Router routes for both the server and the client.
 */
module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="page" component={Page}/>
      <Route path="page2" component={Page2}/>
    </Route>
  </Router>
);
