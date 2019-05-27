import {
  FETCH_MOVIES,
  FETCH_START,
  FETCH_SEARCH,
  FETCH_ERROR,
  FETCH_MOVIE,
  initialState } from '../actions/index';

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return Object.assign({}, state, {
        movies: {
          results:[]
        },
        movie: {},
        loading: true,
        error: ''
      })
    case FETCH_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload,
        loading: false
      })
    case FETCH_MOVIE:
      return Object.assign({}, state, {
        movie: action.payload,
        loading: false
      })
    case FETCH_SEARCH:
      return Object.assign({}, state, {
        movies: action.payload,
        loading: false
      })
    case FETCH_ERROR:
      return Object.assign({}, state, {
        movies: {
          results:[]
        },
        loading: false,
        error: action.payload
      })
  }
  return state;
}