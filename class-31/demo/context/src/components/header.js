import React from 'react';
import {Navbar, Alignment, Button} from '@blueprintjs/core';
import { ThemeContext } from '../context/theme';

export default class Header extends React.Component {
    // read from one context in class component
    static contextType = ThemeContext; //  will give you access to this.context
    
    render() {
        return (
            <header>
                <Navbar className={`bp3-${this.context.mode}`}>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>Mode from Context: {this.context.mode} 
                        <Button icon="refresh" onClick={this.context.toggleMode} />
                        </Navbar.Heading>
                    </Navbar.Group>
                </Navbar>
            </header>
        )
    }
}