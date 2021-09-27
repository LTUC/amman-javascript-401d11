import {connect} from 'react-redux';
import {increment, reset} from '../store/actions';
import votes from '../store/votes';

const VotesCounter = props => {
    return (
        <section>
            <ul>
            {props.counter.map((person, idx) =>
                <li key={idx} onClick={()=>props.increment(person.name)}>{person.name} : {props.votes.totalVotes > 0 ? parseInt((person.votes/ props.votes.totalVotes) * 100) : 0} %</li>
            )}
            </ul>
            <button onClick={props.reset}>Reset everything</button>
        </section>
    )
}

const mapStateToProps = state => ({
    counter : state.candidates,
    votes : state.votes
});

const mapDispatchToProps = {increment, reset};

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);