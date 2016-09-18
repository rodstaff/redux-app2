 import {combineReducers, createStore} from 'redux'

var num = 10
const userReducer = (state={initialState: num}, action) => {
  switch(action.type) {
  	case "CHANGE_NAME": {
  	  state = {...state, name: action.payload}
  	  break;
  	}
  	case "CHANGE_AGE": {
  	  state = {...state, age: action.payload}
  	  break;
  	}
    case "INC": {
      state = {...state, initialState:  num=num+action.payload}
      break;
    }
    case "DEC": {
      state = {...state, initialState: num=num-action.payload}
      break;
    }
  }
  return state;
};
const tweetsReducer = (state=[], action) => {
  return state;
};
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

const store = createStore(reducers);

store.subscribe( () => {
  console.log("Store changed", store.getState())

});

store.dispatch({type:  "CHANGE_NAME", payload: "Bucky"})
store.dispatch({type:  "CHANGE_AGE", payload: 23})
store.dispatch({type:  "CHANGE_AGE", payload: 27})
store.dispatch({type:  "INC", payload: 1})
store.dispatch({type:  "INC", payload: 10})
store.dispatch({type:  "DEC", payload: 1})
store.dispatch({type:  "DEC", payload: 10})


