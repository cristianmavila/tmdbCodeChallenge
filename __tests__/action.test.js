
import {
  FETCH_MOVIE,
  FETCH_START,
  FETCH_ERROR,
  fetchStart,
  fetchMovie
} from '../src/app/actions/index'
import { mockServiceMovie } from '../src/app/services/__mock__/mockMovie'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

jest.mock('../src/app/services/serviceMovie');

describe('actions', () => {

  const store = mockStore({})

  it('call the action fetchStart', async (done) => {

    const expectedActions = [
      { type: FETCH_START }
    ];

    await store.dispatch(fetchStart())
    expect(store.getActions()).toEqual(expectedActions);

    done()
  })

  it('call the action fetchMovie', async (done) => {

    const expectedActions = [
      {
        type: FETCH_START
      },
      {
        type: FETCH_MOVIE,
        payload: mockServiceMovie
      }
    ];

    await store.dispatch(await fetchMovie())
    expect(store.getActions()).toEqual(expectedActions);

    done()
  })

})