import { beginApiCall, apiCallError } from '../apiStatus/actions'
import * as studentApi from '../../api/redux/students/studentsApi'

export const LOAD_STUDENTS = 'LOAD_STUDENTS_SUCCESS'
export const CREATE_STUDENT = 'CREATE_STUDENT_SUCCESS'
export const UPDATE_STUDENT = 'UPDATE_STUDENT_SUCCESS'
export const DELETE_STUDENT = 'DELETE_STUDENT_OPTIMISTIC'

export const loadStudentsSuccess = (students) => ({
  type: LOAD_STUDENTS,
  payload: students,
})

export const createStudentSuccess = (student) => ({
  type: CREATE_STUDENT,
  payload: student,
})

export const updateStudentSuccess = (student) => ({
  type: UPDATE_STUDENT,
  payload: student,
})

export const deleteStudentOptimistic = (student) => ({
  type: DELETE_STUDENT,
  payload: student,
})

export const loadStudents = () => {
  return function (dispatch) {
    dispatch(beginApiCall())
    return studentApi
      .getStudents()
      .then((students) => dispatch(loadStudentsSuccess(students)))
      .catch((error) => {
        dispatch(apiCallError())
        throw new Error(error)
      })
  }
}

export const saveStudent = (student) => {
  return function (dispatch) {
    dispatch(beginApiCall())
    return studentApi
      .saveStudent(student)
      .then((savedStudent) => {
        student.id
          ? dispatch(updateStudentSuccess(student))
          : dispatch(createStudentSuccess(savedStudent))
      })
      .catch((err) => {
        dispatch(apiCallError())
        throw new Error(err)
      })
  }
}

export const deleteStudent = (student) => {
  return function (dispatch) {
    dispatch(deleteStudentOptimistic(student))
    return studentApi.deleteStudent(student.id)
  }
}
