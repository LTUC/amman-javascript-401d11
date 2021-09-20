import {Card, Elevation} from '@blueprintjs/core'
import { SettingsContext } from '../context/site';
import {useContext} from 'react';

export default function Footer(props) {
    const site = useContext(SettingsContext); // pass context object to useContext
    // use useContext as many times as you want
    return (
        <footer>
            <Card elevation={Elevation.TWO}>
                <div>Copyrights 2021 {site.title}</div>
                <div>Twitter <a href={`http://twitter.com/${site.twitter}`}>@{site.twitter}</a></div>
            </Card>
        </footer>
    )
}