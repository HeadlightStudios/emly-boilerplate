import React from 'react'
import styled from 'styled-components'

import Container from './container'
import { Button, Icon, TextInput, Avatar } from '@headlight/cosmos'
import { colors, spacing } from '@headlight/cosmos/tokens'
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

const openSalesModal = () => { }
const switchTenant = () => { }

const links = [
  {
    label: 'Help & Support',
    url: 'https://support.auth0.com',
    target: 'blank'
  },
  {
    label: 'Documentation',
    url: 'https://auth0.com/docs',
    target: 'blank',
    children: [
      {
        label: 'Authentication API',
        url: 'https://auth0.com/docs/api/authentication',
        target: 'blank'
      },
      {
        label: 'Management API',
        url: 'https://auth0.com/docs/api/management/v2',
        target: 'blank'
      }
    ]
  },
  {
    label: 'Talk to Sales',
    onClick: openSalesModal
  }
]

const LogoImage = () => (
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 216.56">
     <g id="Layer_1">
    <g>
      <path d="M239.041,46.491 L237.257,49.227 Q262.909,59.21 270.252,77.122 Q276.046,91.883 275.882,117.01 L275.765,135.071 Q275.691,146.456 265.101,159.737 Q254.512,173.017 240.124,181.856 Q225.735,190.694 212.289,190.607 Q198.842,190.519 188.356,187.899 Q177.87,185.279 172.015,180.038 Q166.16,174.798 162.956,169.379 Q159.752,163.959 154.998,155.389 Q150.244,146.818 144.983,140.698 L144.586,141.481 L144.978,141.483 Q117.689,171.931 102.724,178.901 Q84.804,187.422 67.136,187.307 Q49.469,187.192 37.442,180.145 Q25.414,173.097 17.831,161.858 Q1.885,138.589 2.062,111.303 L2.207,89.12 Q2.232,85.194 10.471,71.113 Q18.709,57.032 24.651,49.022 L21.94,43.311 L30.406,39.44 Q29.838,36.296 27.519,30.587 L40.507,25.764 Q44.766,35.019 50.459,35.056 Q61.069,33.554 70.688,33.617 Q80.307,33.679 89.999,37.669 Q99.69,41.658 108.08,49.565 Q120.569,61.229 134.571,81.54 Q134.574,81.147 136.149,80.372 L144.245,73.162 Q161.622,57.569 168.523,52.903 Q185.674,41.825 205.304,42.149 Q216.886,42.224 229.229,46.034 L229.231,45.642 Q229.232,45.445 229.53,45.055 Q229.827,44.664 232.205,41.146 z M70.362,144.139 L90.811,139.168 L90.416,139.558 Q101.06,132.952 112.124,122.031 Q123.189,111.109 124.026,103.066 L120.513,99.902 Q95.527,78.145 85.827,75.432 Q76.127,72.718 66.803,72.658 Q57.478,72.597 50.194,75.691 Q50.17,79.42 49.757,82.559 L41.321,81.719 Q24.343,96.332 24.245,111.447 Q24.185,120.674 32.38,128.383 Q48.182,143.602 70.362,144.139 z M173.322,130.085 L171.323,135.569 Q185.787,145.282 212.253,150.755 Q227.985,146.735 230.743,145.182 Q233.502,143.63 238.137,140.224 Q242.773,136.819 247.701,133.71 L248.501,131.36 L248.106,131.75 Q253.333,112.938 253.358,109.011 Q253.384,105.085 247.923,99.553 L247.92,99.946 Q235.63,88.087 228.194,84.309 Q220.759,80.53 210.355,80.463 Q199.951,80.395 194.141,83.204 Q188.332,86.012 182.993,91.867 Q175.085,100.453 165.768,114.331 L165.77,113.938 Q163.186,118.829 159.23,123.515 Q159.618,124.107 161.172,126.669 Q162.726,129.231 163.7,130.415 L164.9,127.086 z" fill="#750000"/>
      <path d="M239.041,46.491 L237.257,49.227 Q262.909,59.21 270.252,77.122 Q276.046,91.883 275.882,117.01 L275.765,135.071 Q275.691,146.456 265.101,159.737 Q254.512,173.017 240.124,181.856 Q225.735,190.694 212.289,190.607 Q198.842,190.519 188.356,187.899 Q177.87,185.279 172.015,180.038 Q166.16,174.798 162.956,169.379 Q159.752,163.959 154.998,155.389 Q150.244,146.818 144.983,140.698 L144.586,141.481 L144.978,141.483 Q117.689,171.931 102.724,178.901 Q84.804,187.422 67.136,187.307 Q49.469,187.192 37.442,180.145 Q25.414,173.097 17.831,161.858 Q1.885,138.589 2.062,111.303 L2.207,89.12 Q2.232,85.194 10.471,71.113 Q18.709,57.032 24.651,49.022 L21.94,43.311 L30.406,39.44 Q29.838,36.296 27.519,30.587 L40.507,25.764 Q44.766,35.019 50.459,35.056 Q61.069,33.554 70.688,33.617 Q80.307,33.679 89.999,37.669 Q99.69,41.658 108.08,49.565 Q120.569,61.229 134.571,81.54 Q134.574,81.147 136.149,80.372 L144.245,73.162 Q161.622,57.569 168.523,52.903 Q185.674,41.825 205.304,42.149 Q216.886,42.224 229.229,46.034 L229.231,45.642 Q229.232,45.445 229.53,45.055 Q229.827,44.664 232.205,41.146 z M70.362,144.139 L90.811,139.168 L90.416,139.558 Q101.06,132.952 112.124,122.031 Q123.189,111.109 124.026,103.066 L120.513,99.902 Q95.527,78.145 85.827,75.432 Q76.127,72.718 66.803,72.658 Q57.478,72.597 50.194,75.691 Q50.17,79.42 49.757,82.559 L41.321,81.719 Q24.343,96.332 24.245,111.447 Q24.185,120.674 32.38,128.383 Q48.182,143.602 70.362,144.139 z M173.322,130.085 L171.323,135.569 Q185.787,145.282 212.253,150.755 Q227.985,146.735 230.743,145.182 Q233.502,143.63 238.137,140.224 Q242.773,136.819 247.701,133.71 L248.501,131.36 L248.106,131.75 Q253.333,112.938 253.358,109.011 Q253.384,105.085 247.923,99.553 L247.92,99.946 Q235.63,88.087 228.194,84.309 Q220.759,80.53 210.355,80.463 Q199.951,80.395 194.141,83.204 Q188.332,86.012 182.993,91.867 Q175.085,100.453 165.768,114.331 L165.77,113.938 Q163.186,118.829 159.23,123.515 Q159.618,124.107 161.172,126.669 Q162.726,129.231 163.7,130.415 L164.9,127.086 z" fill-opacity="0" stroke="#060606" stroke-width="4"/>
    </g>
    <path d="M320.316,123.149 Q320.316,115.169 322.766,108.589 Q325.216,102.009 329.626,97.249 Q334.036,92.489 339.916,89.899 Q345.796,87.309 352.796,87.309 Q359.516,87.309 365.046,89.479 Q370.576,91.649 374.566,95.849 Q378.556,100.049 380.796,106.069 Q383.036,112.089 383.036,119.789 L383.036,124.829 L333.196,124.829 Q333.616,135.609 339.006,141.979 Q344.396,148.349 353.356,148.349 Q360.916,148.349 364.976,144.779 Q369.036,141.209 370.156,136.589 L382.476,136.589 Q381.776,141.209 379.396,145.269 Q377.016,149.329 373.236,152.339 Q369.456,155.349 364.416,157.169 Q359.376,158.989 353.356,158.989 Q345.376,158.989 339.216,156.469 Q333.056,153.949 328.856,149.259 Q324.656,144.569 322.486,137.989 Q320.316,131.409 320.316,123.149 z M352.796,97.949 Q345.796,97.949 340.686,102.569 Q335.576,107.189 333.896,115.589 L370.436,115.589 Q369.596,106.349 365.046,102.149 Q360.496,97.949 352.796,97.949 z" fill="#151F43"/>
    <path d="M394.716,88.989 L406.476,88.989 L406.476,99.069 L407.036,99.069 Q409.976,93.189 415.296,90.249 Q420.616,87.309 427.756,87.309 Q434.756,87.309 440.496,90.529 Q446.236,93.749 449.036,101.169 Q452.536,93.889 458.136,90.599 Q463.736,87.309 471.996,87.309 Q476.756,87.309 481.096,88.779 Q485.436,90.249 488.586,93.469 Q491.736,96.689 493.626,101.939 Q495.516,107.189 495.516,114.749 L495.516,157.309 L483.196,157.309 L483.196,116.429 Q483.196,106.349 479.766,102.149 Q476.336,97.949 469.196,97.949 Q465.556,97.949 462.266,99.629 Q458.976,101.309 456.526,104.389 Q454.076,107.469 452.676,111.879 Q451.276,116.289 451.276,121.749 L451.276,157.309 L438.956,157.309 L438.956,116.429 Q438.956,106.349 435.316,102.149 Q431.676,97.949 424.956,97.949 Q421.316,97.949 418.026,99.629 Q414.736,101.309 412.286,104.389 Q409.836,107.469 408.436,111.879 Q407.036,116.289 407.036,121.889 L407.036,157.309 L394.716,157.309 z" fill="#151F43"/>
    <path d="M511.676,54.829 L523.996,54.829 L523.996,157.309 L511.676,157.309 z" fill="#151F43"/>
    <path d="M539.736,178.589 Q551.496,178.589 556.536,164.589 L558.076,160.249 L531.196,88.989 L544.636,88.989 L563.676,143.869 L564.236,143.869 L583.276,88.989 L595.596,88.989 L566.616,167.949 Q565.216,171.729 563.186,175.509 Q561.156,179.289 558.146,182.369 Q555.136,185.449 551.146,187.339 Q547.156,189.229 541.976,189.229 L535.256,189.229 L535.256,178.589 z" fill="#151F43"/>
  </g>
  </svg>
)

const TopNav = styled.div`
  height: 69px;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #eee;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`

const StyledContainer = styled(Container) `
  height: 100%;
`

const TopNavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

/* TODO: Should be a Close Component */
const UserDropdown = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 0.25em;
  }
`

const InputSearch = styled(TextInput) `
  background-color: #f6f6f6;
  border-color: #f6f6f6;
  height: 35px;
  width: 240px;
`

const Links = styled.div`
  flex-grow: 1;
  text-align: right;
  ul  {
  }
  ul > li {
    display: inline-block;
    margin-right: ${spacing.medium};
    &:last-child {
      margin-right: 0;
    }
  }
  ul > li > a  {
    display: block;
    color: ${colors.base.default};
    text-decoration: none;
  }
  .tenant-name {
    color: ${colors.text.default};
    margin-right: ${spacing.xsmall};
  }
  .notifications {
    bottom: 1px;
    position: relative;
  }
`

const Logo = styled.div`
  a {
    display: block;
    width: 94px;
    height: 35px;
    margin-right: 100px;
  }
`
@inject("store")
@observer
class TopNavigation extends React.Component {

  render() {
    return (
      <TopNav links={links}>
        <StyledContainer>
          <TopNavWrapper>
            <Logo>
              <a href="/manage/clients">
                <LogoImage />
              </a>
            </Logo>
            <div>
              <InputSearch placeholder="Search for clients or features" />
            </div>
            <Links>
              <ul>
                <li>
                  <a href="">Help & Support</a>
                </li>
                <li>
                  <a href="">Documentation</a>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
                <li>
                  <a href="" className="notifications">
                    <Icon name="notifications" size={16} color={colors.base.default} />
                  </a>
                </li>
                <li>
                  {
                    !this.props.store.auth.isAuthenticated && (
                      <Link to='/login'>
                        <Button
                          id="qsLoginBtn"
                          bsStyle="primary"
                          className="btn-margin"
                        >
                          Log In
                  </Button>
                      </Link>
                    )
                  }
                  {
                    this.props.store.auth.isAuthenticated && (
                      <Link to='/logout'>
                        <Button
                          id="qsLogoutBtn"
                          bsStyle="primary"
                          className="btn-margin"
                        >
                          Log Out
                  </Button>
                      </Link>
                    )
                  }
                </li>
              </ul>
            </Links>
          </TopNavWrapper>
        </StyledContainer>
      </TopNav>
    )
  }
}

export default TopNavigation