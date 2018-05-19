import React from 'react'
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

@inject("store")
@observer
class Login extends React.Component {

  componentDidMount() {
    if ((/access_token|id_token|error/.test(this.props.location.hash))) {
      this.props.store.auth.doVerifyCallback();
    } else
      this.props.store.auth.doStartLogin();
  }

  render() {
     if (this.props.store.auth.isAuthenticated)
      return (<Redirect to={{
        pathname: '/'
      }} />)
    else
      return (<div>Loading</div>);
  }

}

export default Login