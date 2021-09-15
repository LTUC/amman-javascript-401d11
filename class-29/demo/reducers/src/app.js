import {useReducer} from 'react';
import peopleReducer, {addAction, removeAction, emptyAction} from './reducer';


const initialState = {
    people: [], 
    count: 0
}
function App() {
    
    const [state, dispatch] = useReducer(peopleReducer, initialState);
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log("e.target >>> ", e.target);
        const name = e.target.person.value;
        dispatch(addAction(name));
        e.target.reset();
    }

    return (
        <>
            <h1>People</h1>
            <h2>{state.count}</h2>
            <form onSubmit={handleSubmit}>
                <input name="person"/>
                <button>Add Person</button>
            </form>
            <button onClick={()=>dispatch(emptyAction())}>Clear All</button>
            <ul>
            {
                state.people.map((person, indx)=> {
                    return <li key={indx} onClick={()=>dispatch(removeAction(person))}>{person}</li>
                })
            }
            </ul>
        </>
    )
}

export default App;

