import mockServiceMovies from './mockMovies'

export const serviceMovies = async () => {
  return await new Promise(resolve => {
    resolve(mockServiceMovies)
  })
}