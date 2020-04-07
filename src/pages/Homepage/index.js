import React, { useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Emoji from 'react-emoji-render'
import { H1, H2, H3 } from '../../components/Typography'
import { ProfilePicture, PictureWrapper } from './styled'
import { WrappedButton, Button } from '../../components/Button'

const Homepage = ({ auth, isAuthenticated, ...props }) => {
  const [login, setlogin] = useState()
  useEffect(() => {
    isAuthenticated
      ? auth.getProfile((profile, err) => {
          setlogin(profile)
        })
      : setlogin(null)
  }, [auth, isAuthenticated])

  const text = ['Clone...', 'Edit...', `Deploy...`]

  return (
    <>
      <H1 textAlign="center">React Best Practices</H1>
      <H3>Focus on features not boilerplate</H3>

      <H2 textAlign="center">
        <ReactTypingEffect
          text={text}
          cursor="I"
          speed={50}
          eraseDelay={1250}
          typingDelay={500}
        />
      </H2>
      {console.log('Props', props)}
      <WrappedButton
        href={() => props.history.push('get-started')}
        text="Get Started"
      />
      <span textAlign="center">
        {login ? `Welcome ${login.given_name}` : <div>You are not log in</div>}
      </span>
      {login && (
        <PictureWrapper>
          <ProfilePicture src={login.picture} alt="profile pic" />
        </PictureWrapper>
      )}
    </>
  )
}

export default Homepage
