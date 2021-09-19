import React from 'react'
import Header from './header';
import Footer from './footer';
import Content from './content';
import { ThemeContext } from '../context/theme';

export default class Main extends React.Component {
    static contextType = ThemeContext;
    render() {
        return (
            <main className={this.context.mode}>
                <Header/>
                <Content/>
                <Footer/>
            </main>
        )
    }
}