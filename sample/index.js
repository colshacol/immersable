import { store } from './store'

import { actionTypes } from './authentication'
console.log({ actionTypes })
const { LOG_IN, LOG_OUT, CHANGE_USER_EMAIL } = actionTypes

console.log('\n\nINITIAL STORE STATE')
console.log(store.getState())

console.log('\n\n\nLOG_IN')
store.dispatch({ type: LOG_IN, userName: 'danny', userEmail: 'danny@steve.com' })

console.log(store.getState())

console.log('\n\n\nCHANGE_USER_EMAIL')
store.dispatch({ type: CHANGE_USER_EMAIL, userEmail: 'fofofofofof@steve.com' })

console.log(store.getState())

console.log('\n\n\nLOG_OUT')
store.dispatch({ type: LOG_OUT })

console.log(store.getState())

