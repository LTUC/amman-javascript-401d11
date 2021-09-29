import { useState, useEffect } from "react";
import { add,remove, get } from "../rtk-store/people";
import {useDispatch} from 'react-redux'
// connect the props to dispatch 
// connect props to state 
import {connect} from 'react-redux';

const People = props=> {
    const [name, setName] = useState('');
    // const dispatch = useDispatch();
    // after the intial render only
    useEffect(()=> {
        console.log("in useEffect <<<< ")
        props.get();
        // dispatch(get());
    }, []);

    const handleSubmit = e=> {
        e.preventDefault();
        e.target.reset();
        props.add(name)
    }

    const handleChange = e=> {
        setName(e.target.value);
    }

    return (
        <>
            <section>
                <ul>
                {props.people.map((person, idx)=>  
                    <li key={idx} onClick={()=> props.remove(person)}>{person}</li>
                )} 
                </ul>
            </section>
            <form onSubmit={handleSubmit}>
                <input name="name" onChange={handleChange}/>
                <button type="submit">Add New Person</button>
            </form>
        </>
    )
}
const mapStateToProps= state => ({
    people: state.peopleSlice
});//useSelector()

// not related to the RTK no change here its redux work 
const mapDispatchToProps = {add, remove, get}; // useDispatch()

export default connect(mapStateToProps, mapDispatchToProps)(People);