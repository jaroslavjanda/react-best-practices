import {
  LOAD_STUDENTS,
  CREATE_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from './actions'
import initialState from '../initialState'

const studentReducer = (state = initialState.students, action) => {
  switch (action.type) {
    case LOAD_STUDENTS:
      return action.payload
    case CREATE_STUDENT:
      return [...state, action.payload]
    case UPDATE_STUDENT:
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      )
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload.id)
    default:
      return state
  }
}

export default studentReducer
