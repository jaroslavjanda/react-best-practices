export const BEGIN_API_CALL = 'BEGIN_API_CALL'
export const API_CALL_FAILED = 'API_CALL_FAILED'

export const beginApiCall = () => ({
  type: BEGIN_API_CALL,
})

export const apiCallError = () => ({
  type: API_CALL_FAILED,
})
