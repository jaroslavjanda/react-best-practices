import { generatePath } from 'react-router-dom'

// Public
export const HOMEPAGE = '/'
export const GET_STARTED = '/get-started'
export const BEST_PRACTICES = '/features'

// Components
export const COMPONENTS = '/components'
export const COMPONENT_DETAIL = '/components/:componentId'
export const getComponentDetailRoute = (componentId) => {
  return generatePath(COMPONENT_DETAIL, { componentId })
}
export const LIBRARIES = '/libraries'

export const nevim = '/nevim'

// Redux example
export const REDUX = '/features/redux'
export const REDUX_STUDENTS = '/features/redux/students'
export const REDUX_EDIT_STUDENT = '/features/redux/student/:studentId'
export const getStudentEditRoute = (studentId) => {
  return generatePath(REDUX_EDIT_STUDENT, { studentId })
}
export const REDUX_STUDENT = '/features/redux/student'

// Private
export const PRIVATE = '/private'

// System
export const LOGIN = '/callback'
export const LOGOUT = '/logout'
