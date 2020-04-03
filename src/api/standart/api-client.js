/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */

import { baseUrl } from './../baseUrl'
import { handleResponse } from '../apiUtils'

const makeRequest = (url, options, token) =>
  fetch(`${baseUrl}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
    },
    ...options,
  })

export const api = async (url, options) => {
  // let token = getToken()
  const token = ''
  const response = await makeRequest(url, options, token)
  return handleResponse(response)
}
