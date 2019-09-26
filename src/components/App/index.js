import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../../routes';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            {routes.map(({ exact, path, component }) => {
              return (
                <Route
                  exact={exact}
                  path={path}
                  key={path}
                  component={component}
                />
              );
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
