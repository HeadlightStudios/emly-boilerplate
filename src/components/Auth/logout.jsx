import React from 'react'
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

@inject("store")
@observer
class Logout extends React.Component {

  componentDidMount() {
    if (this.props.store.auth.isAuthenticated) {
      this.props.store.auth.doLogout();
    } 
  }

  render() {
     // TO DO REDIRECT TO props from
    if (!this.props.store.auth.isAuthenticated)
      return (<Redirect to={{
        pathname: '/',
      }} />)
    else
      return (<div>Logging Out</div>);
  }

}

export default Logout