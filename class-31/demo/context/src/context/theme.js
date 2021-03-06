import React from "react";

export const ThemeContext = React.createContext();

// Provider for my context
export default class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'dark',
            toggleMode: this.toggleMode
        }
    }
    toggleMode =()=> {
        this.setState({mode : this.state.mode == 'dark'? 'light': 'dark'});
    }
    
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}