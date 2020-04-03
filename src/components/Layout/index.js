/*
Here define your menu 
and layout which will be
used on every page
*/

import React, { Fragment } from 'react'

import { withRouter } from 'react-router-dom'
import * as routes from '../../routes'

import { Wrapper, Header, HeaderSection, HeaderLink } from './styled'

const Layout = ({ isAuthenticated, children, auth }) => {
  return (
    <>
      <Header>
        <HeaderSection>
          <HeaderLink exact to={routes.HOMEPAGE}>
            Home
          </HeaderLink>
        </HeaderSection>
        <HeaderSection>
          <HeaderLink to={routes.GET_STARTED}>Get Started</HeaderLink>|
          <HeaderLink to={routes.BEST_PRACTICES}>Features</HeaderLink>|
          {isAuthenticated ? (
            <>
              <HeaderLink to={routes.PRIVATE}>Private</HeaderLink>|
              <HeaderLink to={false} onClick={auth.logout}>
                Log Out
              </HeaderLink>
            </>
          ) : (
            <>
              <HeaderLink to={false} onClick={auth.login}>
                Log In
              </HeaderLink>
            </>
          )}
        </HeaderSection>
      </Header>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default withRouter(Layout)
