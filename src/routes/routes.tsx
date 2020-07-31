import React from 'react';

import { Switch, Route } from 'react-router-dom';

import MainScreen from '../pages/MainScreen';
import DetailsScreen from '../pages/DetailsScreen';
import CaseScreen from '../pages/CaseScreen';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={MainScreen} />
    <Route path="/dashboard" component={DetailsScreen} />
    <Route path="/case" component={CaseScreen} />
  </Switch>
);

export default Routes;
