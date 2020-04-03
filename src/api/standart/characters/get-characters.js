import { api } from '../api-client'
import { formatCharacters } from './helpers/format-characters'

export const getCharacters = async (urlQuery) => {
  const { results, info } = await api(
    `/api/character/?${JSON.stringify(urlQuery)}`
  )
  return {
    data: results.map((character) => formatCharacters(character)),
    ...info,
  }
}
