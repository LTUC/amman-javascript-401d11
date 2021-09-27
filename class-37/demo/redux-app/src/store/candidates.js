// candidates state is an array 
let initialState = [
    {name: 'Noor', votes: 0},
    {name: 'Ibrahem', votes: 0},
    {name: 'Nedal', votes: 0},
    {name: 'Samah', votes: 0}
];
// reducer
export default (state = initialState, action) => {
    let {type, payload} = action;
    console.log(action);
    switch(type) {
        case 'INCREMENT':
            console.log("INCREMENT in candidates reducer")
            return state.map(candidate => {
                if (candidate.name == payload) {
                    return {name : candidate.name, votes: candidate.votes + 1}
                } 
                return candidate;
            });
            // shredder ...
            // let candidates = state.candidates.map(candidate=> candidate.name == payload ? {...candidate, votes: candidate.votes+1}: candidate)
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}
