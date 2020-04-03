import { api } from '../api-client'

export const getStudents = async () => {
  const data = await api(`/students`)
  return {
    data,
  }
}
