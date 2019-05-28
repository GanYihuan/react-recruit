import axios from 'axios'// Promise based HTTP client for the browser and node.js

// constant
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'
const initState = {
	isAuth: false,
	user: '李云龙',
	age: 20
}

// reducer
export function auth(state = initState, action) {
	switch (action.type) {
		case LOGIN:
			return { ...state, isAuth: true }
		case LOGOUT:
			return { ...state, isAuth: false }
		case USER_DATA:
			return { ...state, user: action.payload.user, age: action.payload.age }
		default:
			return state
	}
}

// action (store.dispatch)
export function getUserData() { // redux-thunk handleasync
	return dispatch => {
    axios
      .get('/data')
      .then(res => {
        if (res.status === 200) {
          dispatch(userData(res.data))
        }
      })
	}
}

export function userData(data) {
	return { type: USER_DATA, payload: data } // payload: receive pass parameter
}

export function login() {
	return { type: LOGIN }
}

export function logout() {
	return { type: LOGOUT }
}
