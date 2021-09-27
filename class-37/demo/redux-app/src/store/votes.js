// any data type
let initialState = {
    totalVotes: 0
}
// reducer
export default (state = initialState, action) => {
    let {type, payload} = action;
    console.log(action);
    switch(type) {
        case 'INCREMENT':
            console.log("INCREMENT in Votes reducer")
            return {totalVotes: state.totalVotes + 1};
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}
