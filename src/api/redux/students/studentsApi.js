import { handleResponse, handleError } from '../../apiUtils'
import { baseUrl } from '../../baseUrl'

const url = `${baseUrl}/students/`

export function getStudents() {
  return fetch(url).then(handleResponse).catch(handleError)
}

export function saveStudent(student) {
  return fetch(url + (student.id || ''), {
    method: student.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(student),
  })
    .then(handleResponse)
    .catch(handleError)
}

export function deleteStudent(studentId) {
  return fetch(url + studentId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError)
}
