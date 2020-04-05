import React, { useState, useEffect } from 'react'
import { H1, H3 } from '../../components/Typography'
import { ProfilePicture, PictureWrapper } from './styled'
import { Button } from '../../components/Button'

const Homepage = ({ auth, isAuthenticated }) => {
  const [login, setlogin] = useState()
  useEffect(() => {
    isAuthenticated
      ? auth.getProfile((profile, err) => {
          setlogin(profile)
        })
      : setlogin(null)
  }, [auth, isAuthenticated])

  return (
    <>
      <H1 textAlign="center" style={{ textTransform: 'uppercase' }}>
        Welcome 2
      </H1>
      <H1 textAlign="center">Welcome</H1>
      <H1 textAlign="center">welcome</H1>
      <H3 textAlign="center">
        {login ? `Welcome ${login.given_name}` : <div>You are not log in</div>}
      </H3>
      {login && (
        <PictureWrapper>
          <ProfilePicture src={login.picture} alt="profile pic" />
        </PictureWrapper>
      )}
      <Button>Get Started</Button>
    </>
  )
}

export default Homepage
