import React from 'react'

import { PageHeader } from '@headlight/cosmos'

class DefaultPage extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Dashboard"
          description={{
            text:
              'This is a demonstration app used as a boilerplate for Headlight Studios',
            learnMore: '/manage/clients'
          }}
        />
      </div>
    )
  }
}

export default DefaultPage
