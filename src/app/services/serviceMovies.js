/**
 * @tmdbcodechallenge
 * Provides a result to the list of movies
 */

import axios from 'axios'
import { ROOT_URL } from '../actions/index'

export default async () => {
  const response = await axios.get(`${ROOT_URL}movie/list`)
  return response.data
}