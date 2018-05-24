import { createState } from '../src'

const LOG_IN = (state, action) => {
  state.authenticated = true
  state.userName = action.userName
  state.userEmail = action.userEmail
	return state
}

const LOG_OUT = (state, action) => {
  state.authenticated = false
  state.userName = ''
  state.userEmail = ''
  return state
}

const CHANGE_USER_EMAIL = (state, action) => {
  state.userEmail = action.userEmail
  return state
}

const createReducer = createState({
  authenticated: false,
  userName: '',
  userEmail: ''
})

export const { reducer, actionTypes } = createReducer([
  CHANGE_USER_EMAIL,
	LOG_IN,
  LOG_OUT,
])
