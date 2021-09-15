const initialState = {
    people: [], 
    count: 0
}

// Reducer Function
export default function peopleReducer(state = initialState, action) {
    console.log("action......", action)
    console.log("state =", state)
    const {type, payload} = action;
    switch(type) {
        case 'ADD_PERSON':
            const count = state.count + 1;
            const people = [...state.people, payload];
            // return the new state
            return { count, people};
        case 'REMOVE_PERSON':
            const decrementedCount = state.count -1;
            const peopleWithoutPerson = state.people.filter((person)=> person !== payload);
            return {count: decrementedCount, people: peopleWithoutPerson};
            // return the new state
        case 'EMPTY_PEOPLE':
            return initialState;
        default:
            return state;
    }
}

export const addAction =(name)=> {
    console.log("inside addAction, name : ", name);
    return {
        type: 'ADD_PERSON',
        payload: name
    }
}

export const removeAction =(name)=> {
    console.log("remove : ", name)
    return {
        type: 'REMOVE_PERSON',
        payload: name
    }
}

export const emptyAction = ()=> {
    return {
        type: 'EMPTY_PEOPLE'
    }
}


