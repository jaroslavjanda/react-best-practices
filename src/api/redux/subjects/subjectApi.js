import { handleResponse, handleError } from '../../apiUtils'
import { baseUrl } from '../../baseUrl'

const url = `${baseUrl}/subjects/`

export function getSubjects() {
  return fetch(url).then(handleResponse).catch(handleError)
}
