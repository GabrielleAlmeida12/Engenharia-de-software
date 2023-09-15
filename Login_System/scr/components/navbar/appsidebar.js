import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './navbar';
import Home from '../../../pages/home';

export default function Appsidebar() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          
        </Switch>
      </div>
    </Router>
  );
}

