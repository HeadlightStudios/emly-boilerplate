import React from 'react'
import { PageHeader } from '@headlight/cosmos'

import CreateClientDialog from './create-client-dialog'
import ClientList from '../../components/client-list'

class ClientIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dialogOpen: false }
  }

  setDialogOpen = dialogOpen => () => {
    this.setState({ dialogOpen })
  }

  render() {
    return (
      <div>
        <PageHeader
          title="Coins"
          description={{
            text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
            learnMore: '/manage/clients'
          }}
          primaryAction={{
            label: 'Add coin',
            icon: 'plus',
            method: this.setDialogOpen(true)
          }}
          secondaryAction={{
            label: 'AI Bot',
            icon: 'play-circle',
            method: () => {}
          }}
        />

        <ClientList />

        <CreateClientDialog open={this.state.dialogOpen} onClose={this.setDialogOpen(false)} />
      </div>
    )
  }
}

export default ClientIndex
