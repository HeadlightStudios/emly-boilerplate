import React, { Component } from 'react';
import { Button } from '@headlight/cosmos';
import TopNavigation from './components/top-navigation'
import Container from './components/container'
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

@inject("store")
@observer
class App extends Component {

  componentDidMount() {
    if (this.props.location.hash !== "" && (/access_token|id_token|error/.test(this.props.location.hash))) {
      this.props.store.auth.doVerifyCallback();
    } else if (!this.props.store.auth.isAuthenticated)
        this.props.store.auth.doStartLogin();
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render() {
    return (
      <div>
        <TopNavigation />
        <Container>
          {this.props.store.auth.isAuthenticated ? this.props.children : <div />}
        </Container>
      </div>
    );
  }
}

export default App;
