import { beginApiCall, apiCallError } from '../apiStatus/actions'
import * as subjectApi from '../../api/redux/subjects/subjectApi'

export const LOAD_SUBJECTS = 'LOAD_SUBJECTS_SUCCESS'

export const loadSubjectsSuccess = (subjects) => ({
  type: LOAD_SUBJECTS,
  payload: subjects,
})

export const loadSubjects = () => {
  return function (dispatch) {
    dispatch(beginApiCall())
    return subjectApi
      .getSubjects()
      .then((subjects) => dispatch(loadSubjectsSuccess(subjects)))
      .catch((error) => {
        dispatch(apiCallError())
        throw new Error(error)
      })
  }
}
