import {connect} from 'react-redux'

const Status = props => {
    return (
        <section>
            {props.counter.totalVotes}
        </section>
    )
}

// we only care about reading some state in this component, to display it 
const mapStateToProps = state => ({
    counter: state.counter
});

// we do not have any action in this component so no need for mapDispatchToProps

export default connect(mapStateToProps)(Status);