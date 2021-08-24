console.log('reducer demo');

const redux = require('redux');

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  //   console.log('inside reducer fn', state.counter);
  if (action.type === 'INCR') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'DECR') {
    return { counter: state.counter - 1 };
  }
  return state;
};

// one source of truth
const store = redux.createStore(counterReducer);

// prisijungimo funkcija
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log('subscriber state', latestState);
};

// visi failai kurie nori naudoti store turi prisijungti su subscribe
store.subscribe(counterSubscriber);

// ivygdom reducerio funkcija su dispatch

store.dispatch({ type: 'INCR' });
store.dispatch({ type: 'INCR' });
store.dispatch({ type: 'DECR' });
