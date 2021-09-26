import {connect} from 'react-redux';
import {increment, reset} from '../store/votes';

const VotesCounter = props => {
    return (
        <section>
            <ul>
            {props.counter.candidates.map((person, idx) =>
                <li key={idx} onClick={()=>props.increment(person.name)}>{person.name} : {person.votes}</li>
            )}
            </ul>
            <button onClick={props.reset}>Reset everything</button>
        </section>
    )
}

const mapStateToProps = state => ({
    counter : state.counter
});

const mapDispatchToProps = {increment, reset};

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);