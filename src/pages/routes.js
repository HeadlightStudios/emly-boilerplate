import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ClientIndex from '../pages/clients'
import ClientDetail from '../pages/client-detail'
import EmailsIndex from '../pages/emails'
import RulesIndex from '../pages/rules'
import SsoIndex from '../pages/sso-integrations'
import AnomalyDetectionIndex from '../pages/anomaly-detection'
import LogsIndex from '../pages/slogs'
import ApisIndex from '../pages/apis'
import UsersIndex from '../pages/users'
import DefaultPage from './default'

const Page = () => (
  <div
    style={{
      width: '836px',
      marginLeft: '198px',
      paddingBottom: '50px'
    }}
  >
    <Router>
      <div>
        <Route exact path="/manage/clients" component={ClientIndex} />
        <Route exact path="/manage/clients/:clientId" component={ClientDetail} />
        <Route exact path="/manage/emails" component={EmailsIndex} />
        <Route exact path="/manage/rules" component={RulesIndex} />
        <Route exact path="/manage/logs" component={LogsIndex} />
        <Route exact path="/manage/users" component={UsersIndex} />
        <Route exact path="/manage/apis" component={ApisIndex} />
        <Route exact path="/manage/anomaly" component={AnomalyDetectionIndex} />
        <Route exact path="/manage/sso-integrations" component={SsoIndex} />
        <Route exact path="/manage" component={DefaultPage} />
      
      </div>
    </Router>
  </div>
)

export default Page
