import React, { useEffect } from 'react'

const LogIn = ({ location, auth }) => {
  return useEffect(() => {
    if (/acess_token|id_token|error/.test(location.hash)) {
      auth.handleAuthetication()
    } else {
      throw new Error('Invalid callback URL')
    }
  })
}

export default LogIn
