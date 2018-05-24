import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'

import { reducer as authentication } from './authentication'
import { reducer as settings } from './settings'

const reducers = combineReducers({ settings, authentication })
export const store = createStore(reducers)
