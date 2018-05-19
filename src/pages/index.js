import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TopNavigation from '../components/top-navigation'
import SideNavigation from '../components/side-navigation'
import Container from '../components/container'
import PageRoutes from './routes'

@inject("store")
@observer
class Home extends Component {
  render() {
    return (
      <div>
      <TopNavigation />
      <Container>
        <div
          style={{
            display: 'flexbox',
            paddingTop: '110px'
          }}
        >
          <SideNavigation />
          <PageRoutes />
        </div>
      </Container>
    </div>
    );
  }
}

export default Home;


