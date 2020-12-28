import { createStore } from 'redux';

// action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// reducers
// 1. reducers are pure functions
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
})

// increment
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// decrement
store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(decrementCount());

// reset
store.dispatch(resetCount());

// set
store.dispatch(setCount({ count: 1 }));
