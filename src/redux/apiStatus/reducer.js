import { BEGIN_API_CALL, API_CALL_FAILED } from './actions'
import initialState from '../initialState'

const actionTypeEndsInSuccess = (type) => {
  return type.substring(type.length - 8) === '_SUCCESS'
}

const apiStatusReducer = (state = initialState.apiCallsInProgress, action) => {
  if (action.type === BEGIN_API_CALL) {
    return state + 1
  }
  if (actionTypeEndsInSuccess(action.type) || action.type === API_CALL_FAILED) {
    return state - 1
  }
  return state
}

export default apiStatusReducer
