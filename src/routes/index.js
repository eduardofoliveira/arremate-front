import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={SignIn} />

      <Route path="/dashboard" component={SignIn} isPrivate />
      <Route component={NotFound} />
    </Switch>
  );
}
