import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Code, ResourceList } from '@headlight/cosmos'
import { spacing } from '@headlight/cosmos-tokens'
import { clients } from '../pages/clients/clients.json'

import ClientTypeImages from './client-types-images'

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */
import { StyledTextSubdued } from '@headlight/cosmos/atoms/text'

const noop = () => {}

const ClientID = styled(StyledTextSubdued)`
  margin-right: ${spacing.xsmall};
  line-height: normal;
`

const ClientList = props => (
  <ResourceList
    items={clients}
    renderItem={(client, props, index) => (
      <ResourceList.Item
        key={index}
        title={client.name}
        subtitle={client.type}
        href={`/manage/clients/${client.id}`}
        image={ClientTypeImages[client.image]}
        actions={props.actions}
      >
        <ClientID>Client ID</ClientID>
        <Code>{client.id}</Code>
      </ResourceList.Item>
    )}
    actions={[
      { icon: 'quickstarts', label: 'Quickstart', method: noop },
      { icon: 'settings', label: 'Settings', method: noop },
      { icon: 'code', label: 'Addons', method: noop },
      { icon: 'connections', label: 'Connections', method: noop }
    ]}
  />
)

ClientList.propTypes = {
  /* App token */
  id: PropTypes.string.isRequired,
  /* App name */
  name: PropTypes.string
}

ClientList.defaultProps = {
  id: null,
  name: null
}

export default ClientList
