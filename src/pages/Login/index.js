import React, { useEffect } from 'react'

const LogIn = ({ location, auth }) => {
  useEffect(() => {
    if (/acess_token|id_token|error/.test(location.hash)) {
      auth.handleAuthetication()
    } else {
      throw new Error('Invalid callback URL')
    }
  })
  return <div />
}

export default LogIn
