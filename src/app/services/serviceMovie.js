/**
 * @tmdbcodechallenge
 * Provides a result from the movie detail
 */

import axios from 'axios'
import { ROOT_URL } from '../actions/index'

export default async (id) => {
  const response = await axios.get(`${ROOT_URL}movie/${id}/detail`)
  return response.data
}