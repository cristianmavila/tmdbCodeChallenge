
import {
  FETCH_MOVIES,
  fetchMovies
} from '../src/app/actions/index'
import { mockServiceMovies } from '../src/app/services/__mock__/mockMovies';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

jest.mock('../src/app/services/serviceMovies');

describe('actions', () => {

  const store = mockStore({})

  it('call the action fetchMovies', async (done) => {

    const expectedActions = [
      {
        type: FETCH_MOVIES,
        payload: mockServiceMovies
      }
    ];

    await store.dispatch(await fetchMovies())
    expect(store.getActions()).toEqual(expectedActions);

    done()
  })

})