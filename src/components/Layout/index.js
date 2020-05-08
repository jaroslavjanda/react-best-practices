/*
Here define your menu 
and layout which will be
used on every page
*/

import React, { useEffect } from 'react'

import { withRouter } from 'react-router-dom'
import * as routes from '../../routes'
import logo4 from '../../resources/logo4.png'
import { Header, HeaderSection, HeaderLink, Center, Footer } from './styled'

const Layout = ({ isAuthenticated, children, auth }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => window.scrollTo(0, 0)
  })
  return (
    <>
      <Header>
        <HeaderSection>
          <HeaderLink
            exact
            to={routes.HOMEPAGE}
            style={{ padding: '0px', paddingTop: '1rem' }}
          >
            <div style={{ height: '40px' }}>
              <img src={logo4} alt="logo" height="100%" />
            </div>
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
      <Center>{children}</Center>
    </>
  )
}

export default withRouter(Layout)
