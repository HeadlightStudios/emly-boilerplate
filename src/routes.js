import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import AppLayout from './AppLayout';
import Home from './pages';
import Login from './components/Auth/login';
import Logout from './components/Auth/logout';
import createHistory from 'history/createBrowserHistory'
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

const history = createHistory()
const NotFound = () => (<div >404 Not Found</div>)

function RouteWithLayout({ layout, component, ...rest }) {
  return (
    <Route {...rest} render={(props) =>
      React.createElement(layout, props, React.createElement(component, props))
    } />
  );
}

@inject("store")
@observer
class PrivateRouteWithLayout extends React.Component {
  render() {
    var { layout, component, ...rest } = this.props;

    return this.props.store.auth.isAuthenticated ? (
      <Route {...rest} render={(props) =>
        React.createElement(layout, props, React.createElement(component, props))
      } />
    ) : (
        <Redirect to={{
          pathname: '/login'
        }} />
      )
  }
}


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRouteWithLayout layout={AppLayout} path="/private" component={Home} />} />
          <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <RouteWithLayout layout={AppLayout} path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;