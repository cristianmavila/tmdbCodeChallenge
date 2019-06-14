/**
 * @tmdbcodechallenge
 * Provides a result to a search
 */

import axios from 'axios'
import { ROOT_URL } from '../actions/index'

export default async (textSearch) => {
  const response = await axios.get(`${ROOT_URL}movie/search/${textSearch}`)
  return response.data
}