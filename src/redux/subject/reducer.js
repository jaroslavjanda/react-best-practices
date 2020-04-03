import { LOAD_SUBJECTS } from './actions'
import initialState from '../initialState'

const studentReducer = (state = initialState.subjects, action) => {
  switch (action.type) {
    case LOAD_SUBJECTS:
      return action.payload
    default:
      return state
  }
}

export default studentReducer
