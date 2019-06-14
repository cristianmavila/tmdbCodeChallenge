import mockServiceMovie from './mockMovie'

export default async () => {
  return await new Promise(resolve => {
    resolve(mockServiceMovie)
  })
}