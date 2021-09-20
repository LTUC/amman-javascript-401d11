import React, {useContext} from 'react';
import {Navbar, Alignment, Switch} from '@blueprintjs/core';
import { ThemeContext } from '../context/theme';

// export default class Header extends React.Component {
//     static contextType = ThemeContext; //  will give you access to this.context
//     render() {
//         return (
//             <header>
//                 <Navbar className={`bp3-${this.context.mode}`}>
//                     <Navbar.Group align={Alignment.LEFT}>
//                         <Navbar.Heading>Mode from Context: {this.context.mode} 
//                         <Button icon="refresh" onClick={this.context.toggleMode} />
//                         </Navbar.Heading>
//                     </Navbar.Group>
//                 </Navbar>
//             </header>
//         )
//     }
// }

export default function Header(props) {
    const context = useContext(ThemeContext); // pass context object
    return (
        <header>
            <Navbar className={`bp3-${context.mode}`}>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Mode from Context: {context.mode} 
                    <Switch label={context.mode == 'dark' ? 'Go Light' : 'Go Dark' } checked={context.mode == 'dark'} onChange={context.toggleMode} />
                    </Navbar.Heading>
                </Navbar.Group>
            </Navbar>
        </header>
    )
}