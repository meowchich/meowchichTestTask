import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';

import {
  Login,
  News,
  Profile,
} from './containers';

export default class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-nav">
          Navbar:
          <ul>
            <li>
              <NavLink to="/login" exact>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" strict>
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" strict>
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/news"
            component={News}
          />
          <Route
            exact
            path="/profile"
            component={Profile}
          />
          <Redirect
            from="/"
            to="/news"
          />
        </Switch>
      </BrowserRouter>
    )
  }
}