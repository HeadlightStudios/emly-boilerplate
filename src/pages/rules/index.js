import React from 'react'

import { PageHeader } from '@headlight/cosmos'

class RulesIndex extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Rules"
          description={{
            text:
              'Custom Javascript snippets that run in a secure, isolated sandbox in the Auth0 service as part of your authentication pipeline.',
            learnMore: '/'
          }}
          primaryAction={{
            label: 'Create Rule',
            icon: 'plus',
            method: null
          }}
          secondaryAction={{
            label: 'Tutorial',
            icon: 'play-circle',
            method: () => {}
          }}
        />
      </div>
    )
  }
}

export default RulesIndex
