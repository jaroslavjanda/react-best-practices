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
        Welcome on React Best Practices
      </H1>
      <H3 textAlign="center">Lets dive into the best React approaches</H3>
      <Button>Get Started</Button>
      <H3 textAlign="center">
        {login ? `Welcome ${login.given_name}` : <div>You are not log in</div>}
      </H3>
      {login && (
        <PictureWrapper>
          <ProfilePicture src={login.picture} alt="profile pic" />
        </PictureWrapper>
      )}
    </>
  )
}

export default Homepage
