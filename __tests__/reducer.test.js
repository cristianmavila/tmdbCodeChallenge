import MovieReducer from '../src/app/reducers/reducer_movies'
import {
  FETCH_MOVIES,
  FETCH_START,
  FETCH_SEARCH,
  FETCH_ERROR,
  FETCH_MOVIE,
  initialState } from '../src/app/actions/index';

describe('reducers', () => {

  it('should handle FETCH_MOVIES', () => {
    expect(MovieReducer(initialState, {
      type: FETCH_MOVIES
    })).toMatchSnapshot()
  })

  it('should handle FETCH_MOVIE', () => {
    expect(MovieReducer(initialState, {
      type: FETCH_MOVIE
    })).toMatchSnapshot()
  })

  it('should handle FETCH_SEARCH', () => {
    expect(MovieReducer(initialState, {
      type: FETCH_SEARCH
    })).toMatchSnapshot()
  })

  it('should handle FETCH_START', () => {
    expect(MovieReducer(initialState,{
      type: FETCH_START
    })).toMatchSnapshot()
  })

  it('should handle FETCH_ERROR', () => {
    expect(MovieReducer(initialState,{
      type: FETCH_ERROR
    })).toMatchSnapshot()
  })
})