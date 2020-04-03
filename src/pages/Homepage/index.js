import React, { useState, useEffect } from 'react'
import { H1, H3 } from '../../components/Typography'
import { ProfilePicture } from './styled'
import { Button } from "../../components/Button"

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
      <H1 textAlign="center">Welcome on Homepage</H1>
      <H3 textAlign="center">
        {login ? `Welcome ${login.given_name}` : <div>You are not log in</div>}
      </H3>
      {login && <ProfilePicture src={login.picture} alt="profile pic" />}
      <Button>Get Started</Button>
    </>
  )
}

export default Homepage
