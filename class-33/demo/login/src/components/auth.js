import React from 'react';
import {When} from 'react-if';

import { LoginContext } from './context';

export default class Auth extends React.Component {
    static contextType = LoginContext;
    
    render() {
        const isLoggedIn = this.context.loggedIn;
        console.log("isLoggedIn >>>", isLoggedIn);
        console.log("user:", this.context.user);
        const canDo = this.context.can(this.props.capability);
        return (
            <When condition={isLoggedIn && canDo}>
                {this.props.children}
            </When>
        )
    }
}