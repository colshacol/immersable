import produce from 'immer'
import decamelize from 'decamelize'

import { DEFAULT_ACTION, INIT_ACTION_TYPE } from './consts'

type CasesT = TODO

const invalidType = (state, action, cases) => {
	// TODO: Handle invalidType.
	return state
}

// Handle the @@INIT action or other unrecognized action type.
const unknownActionHandler = (state, action, cases) => {
	return !(action.type === INIT_ACTION_TYPE)
		? invalidType(state, action, cases)
		: state
}

// Produce things?
const producer = (state, action, cases) => {
	return produce(state, draft => {
		return cases[action.type](draft, action)
	})
}

// Creates a reducer-wrapper that ensures that immutability
// is kept while working in the reducer.
const prepareReducer = (cases, initState) => {
	return (state = initState, action = DEFAULT_ACTION) => {
		return action.type in cases
			? producer(state, action, cases)
			: unknownActionHandler(state, action, cases)
	}
}

const getActionType = (final, _case) => {
	final[_case.name] = _case.name
	return final
}

export const applyActionHandler = (final, handler: Function) => {
	const name = decamelize(handler.name).toUpperCase()
	final[name] = handler
	return final
}

// Entry point to create immutable state reducers.
// Create reducer from provided initial-state and cases.
export const createState = (initState: any) => (cases: CasesT): TODO => {
	const reducer = cases.reduce(applyActionHandler, {})

	return {
		reducer: prepareReducer(reducer, initState),
		actionTypes: cases.reduce(getActionType, {})
	}
}
