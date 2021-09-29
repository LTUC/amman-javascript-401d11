import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import peopleSlice from './people';

// add combineReducers from redux if needed (if you have more than one reducer);
const reducers = combineReducers({peopleSlice: peopleSlice})
const store = configureStore({reducer: reducers});
// thunk is already enabled in our store 

export default store;


