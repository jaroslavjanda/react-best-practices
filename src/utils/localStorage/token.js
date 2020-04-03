export const TOKEN = 'access_token'
export const ID_TOKEN = 'id_token'

export const getToken = () => {
  const token = window.localStorage.getItem(TOKEN)
  if (!token) {
    throw new Error('No access token found')
  }
  return token
}

export const setToken = (token) => {
  window.localStorage.setItem(TOKEN, token)
}

export const removeToken = () => {
  window.localStorage.removeItem(TOKEN)
}
