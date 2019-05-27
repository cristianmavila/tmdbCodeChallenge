import axios from 'axios'
import serviceMovie from '../services/serviceMovie'
import serviceMovies from '../services/serviceMovies'
import serviceSearch from '../services/serviceSearch'

export const ROOT_URL = `http://192.168.99.100:9000/`
export const FETCH_MOVIES = 'FETCH_MOVIES'
export const FETCH_MOVIE = 'FETCH_MOVIE'
export const FETCH_START = 'FETCH_START'
export const FETCH_SEARCH = 'FETCH_SEARCH'
export const FETCH_ERROR = 'FETCH_ERROR'

export const initialState = {
  movies: {
    results: []
  },
  movie: {
    genres: []
  },
  loading: false,
  error: ''
}

export const fetchMovies = async () => {
  try {
    const request = await serviceMovies()
    return {
      type: FETCH_MOVIES,
      payload: request
    }
  } catch (error) {
    return {
      type: FETCH_ERROR,
      payload: `Not found ${error}`
    }
  }
}

export const SearchMovie = async (textSearch) => {
  try {
    const request = serviceSearch(textSearch)
    return {
      type: FETCH_SEARCH,
      payload: request
    }
  } catch (error) {
    return {
      type: FETCH_ERROR,
      payload: `Not found ${error}`
    }
  }
}

export const fetchMovie = async (id) => {
  try {
    const request = await serviceMovie(id)
    return {
      type: FETCH_MOVIE,
      payload: request
    }
  } catch (error) {
    return {
      type: FETCH_ERROR,
      payload: `Not found ${error}`
    }
  }
}

export const fetchStart = () => {
  return {
    type: FETCH_START
  }
}
