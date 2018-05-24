import { createState } from '../src'

const RESTORE_SETTINGS = (state, action) => {
  state.theme = 'dark'
	return state
}

const SET_THEME = (state, action) => {
  state.theme = action.theme
  return theme
}

const CLEAR_SETTINGS = (state, action) => {
  state.theme = ''
  return state
}

const createReducer = createState({
	theme: 'dark'
})

export const { reducer, actionTypes } = createReducer([
	RESTORE_SETTINGS,
  CLEAR_SETTINGS,
  SET_THEME
])
