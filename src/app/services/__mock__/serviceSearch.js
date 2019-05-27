import mockServiceSearch from './mockMovies'

export const serviceSearch = async () => {
  return await new Promise(resolve => {
    resolve(mockServiceSearch)
  })
}