
import {
  FETCH_SEARCH,
  SearchMovie
} from '../src/app/actions/index'
import { mockServiceMovies } from '../src/app/services/__mock__/mockMovies';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

jest.mock('../src/app/services/serviceSearch');

describe('actions', () => {

  const store = mockStore({})

  it('call the action fetchMovies from the search', async (done) => {

    const expectedActions = [
      {
        type: FETCH_SEARCH,
        payload: mockServiceMovies
      }
    ];

    await store.dispatch(await SearchMovie())
    expect(store.getActions()).toEqual(expectedActions);

    done()
  })

})