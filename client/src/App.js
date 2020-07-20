import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/:id" render={(props) => <HomePage {...props} />} />
      </div>
    </Router>
  );
};
