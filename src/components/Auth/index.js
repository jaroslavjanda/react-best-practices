import auth0 from 'auth0-js'
import {
  getToken,
  removeToken,
  setSession,
} from '../../utils/localStorage/token'
import * as routes from '../../routes'

export default class Auth {
  constructor(history) {
    this.history = history
    this.userProfile = null
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
      responseType: 'token id_token',
      scope: 'openid profile email',
    })
  }

  login = () => {
    this.auth0.authorize()
  }

  handleAuthetication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        this.history.push('/')
      } else if (err) {
        alert(`Error: ${err.error} Check the console for further detailes`)
        console.log(err)
      }
    })
  }

  setSession = (authResult) => {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
  }

  isAuthenticated = () => {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    this.userProfile = null
    this.auth0.logout({
      returnTo: 'www.google.com',
    })
  }

  getProfile = (cb) => {
    if (this.userProfile) return cb(this.userProfile)
    this.auth0.client.userInfo(getToken(), (err, profile) => {
      if (profile) this.userProfile = profile
      cb(profile, err)
    })
  }
}
