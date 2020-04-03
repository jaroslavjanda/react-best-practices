import { api } from '../api-client'

export const getDetailById = async (id) => {
  const data = await api(`/api/character/${id}`)

  return {
    ...data,
  }
}
