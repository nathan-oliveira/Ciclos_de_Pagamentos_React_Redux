import React from 'react'
import { Router, Route, IndexRoute ,Redirect, hashHistory } from 'react-router'

import App from './app'
// import Dashboard2 from '../dashboard2/dashboard2'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycles/billingCycles'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='billingCycles' component={BillingCycle} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)