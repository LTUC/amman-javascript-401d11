// initial State + reducers + actions
import {createSlice} from '@reduxjs/toolkit';
const peopleSlice = createSlice({
    name: "people",
    initialState: [], // array of names
    reducers : {
        add(state, action) {
            state.push(action.payload); // immer package
        },
        remove(state, action) {
            return state.filter(p=> p!= action.payload);
        }
    }
});
// reducer
export default peopleSlice.reducer;
// actions 
export const {add, remove} = peopleSlice.actions;
// another action
export const get = () => async dispatch => {
    // get list of people from starwars API
    const res = await fetch('https://swapi.dev/api/people');
    const data = await res.json(); 
    console.log("data: ", data);
    data.results.forEach(char=>dispatch(add(char.name)));
}