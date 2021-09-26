// any data type
let initialState = {
    candidates : [
        {name: 'Noor', votes: 0},
        {name: 'Ibrahem', votes: 0},
        {name: 'Nedal', votes: 0},
        {name: 'Samah', votes: 0}
    ],
    totalVotes: 0
}
// reducers
export default (state = initialState, action) => {
    let {type, payload} = action;
    console.log(action);
    switch(type) {
        case 'INCREMENT':
            let totalVotes = state.totalVotes + 1;
            let candidates = state.candidates.map(candidate => {
                if (candidate.name == payload) {
                    return {name : candidate.name, votes: candidate.votes + 1}
                }
                return candidate;
            });
            // shredder ...
            // let candidates = state.candidates.map(candidate=> candidate.name == payload ? {...candidate, votes: candidate.votes+1}: candidate)
            return {totalVotes, candidates};
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}
//actions
export const increment = (name) => {
    return {
        type: 'INCREMENT',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}