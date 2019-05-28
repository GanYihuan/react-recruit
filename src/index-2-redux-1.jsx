import { createStore } from 'redux'

// 1) reducer
// generate new state base on old state and action
function counter(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'decrease':
      return state - 1
    default:
      return 10
  }
}

// 2) create store
const store = createStore(counter)
const init = store.getState() // get status
console.log(init)

function listener() {
  const current = store.getState() // get status
  console.log(`have ${current}`)
}
// 3) listening, subscribe
store.subscribe(listener)

// 4) distribute events, pass action
store.dispatch({ type: 'add' })
store.dispatch({ type: 'add' })
store.dispatch({ type: 'decrease' })
