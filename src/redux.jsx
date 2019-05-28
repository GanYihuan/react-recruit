const ADD_GUN = 'add machine gun.'
const REMOVE_GUN = 'reduce machine gun'

// action (store.dispatch)
export function addGun() {
	return { type: ADD_GUN }
}

export function removeGun() {
	return { type: REMOVE_GUN }
}

export function addGunAsync() { // async
	return dispatch => { // redux-thunk
		setTimeout(() => {
			dispatch(addGun())
		}, 2000)
	}
}

// reducer.js generate new state based on old state and action
export function counter(state = 10, action) {
	switch (action.type) {
		case ADD_GUN:
			return state + 1
		case REMOVE_GUN:
			return state - 1
		default:
			return state
	}
}
