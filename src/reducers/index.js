import counterReducer from "./Counter";
import loggedReducer from "./Islogged";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducers;