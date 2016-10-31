import { expect } from 'chai'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS} from '../actions'
import reducer from './auth'

describe('(Reducer) auth', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: null
    })
  })

  it('should handle LOGIN_REQUEST', () => {
    expect(reducer(undefined, { type: LOGIN_REQUEST })).to.deep.equal({
      isAuthenticated: false,
      isFetching: true,
      profile: {},
      error: null
    })
  })

  it('should handle LOGIN_SUCCESS', () => {
    expect(reducer(undefined, { type: LOGIN_SUCCESS, profile: { mockProperty: 'mockValue' } })).to.deep.equal({
      isAuthenticated: true,
      isFetching: false,
      profile: { mockProperty: 'mockValue' },
      error: null
    })
  })

  it('should handle LOGIN_ERROR', () => {
    expect(reducer(undefined, { type: LOGIN_ERROR, error: 'mockError' })).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: 'mockError'
    })
  })

  it('should handle LOGOUT_SUCCESS', () => {
    expect(reducer(undefined, { type: LOGOUT_SUCCESS, error: 'mockError' })).to.deep.equal({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: null
    })
  })
})