import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        // define new state
    }

    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <button onClick={()=> this.props.changeTitle('Test Title')}>Change Title</button>
            </>
        )
    }
}

export default Content;