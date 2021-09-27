// Create my Redux store here 
import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import votes from './votes';
import candidates from './candidates';
//1-  combine reducers in one reducer 
let reducers = combineReducers({
    votes: votes,
    candidates: candidates
});

// 2- createStore 
const store = () => {
    return createStore(reducers, composeWithDevTools())
}

// 3 export 
export default store();

