import React from 'react';
import Content from './content';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg : 'Hello from App'
        }
        // this.change = this.change.bind(this);
    }

    changeTitle = (title)=> {
        this.setState({msg: title});
    }

    // change(title) {
    //     this.setState({msg: title});
    // }

    render() {
        return (
            <Content title={this.state.msg} changeTitle={this.changeTitle}/>
        )
    }
}

export default App;