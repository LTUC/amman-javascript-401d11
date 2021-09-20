//use both context theme and settings
import React, {useContext} from "react";
import {SettingsContext} from '../context/site';
import {ThemeContext} from '../context/theme'
import {Button} from '@blueprintjs/core';

// export default class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>Content Rendered via class component</h2>
//                 <SettingsContext.Consumer>
//                     {siteContext=> (
//                         <>
//                             <h1>{siteContext.title}</h1>
//                             <div>
//                                 <a  target="_blank" href={`http://twitter.com/${siteContext.twitter}`}>
//                                     @{siteContext.twitter}
//                                 </a>
//                             </div>

//                         </>
//                     )}
//                 </SettingsContext.Consumer>
//                 <ThemeContext.Consumer>
//                     {themeContext=> (
//                         <h2>Current Mode: {themeContext.mode}</h2>
//                     )}
//                 </ThemeContext.Consumer>
//             </div>
//         )
//     }
// }
export default function Content(props) {
    const site = useContext(SettingsContext); // context objects
    const theme = useContext(ThemeContext); // context objects
    
    const titleHandler = e => {
        site.setTitle(e.target.value);
    }

    const twitterHandler = e => {
        site.setTwitter(e.target.value);
    }

    return (
        <div>
            <h2>Content Rendered via class component</h2>
            <>
                <h1>{site.title}</h1>
                <div>
                    <a  target="_blank" href={`http://twitter.com/${site.twitter}`}>
                        @{site.twitter}
                    </a>
                </div>
                <form>
                    <label>Title</label>
                    <input type="text" onChange={titleHandler} value={site.title}/>
                    <label>Twitter</label>
                    <input type="text" onChange={twitterHandler} value={site.twitter}/>
                </form>
            </>
            <h2>Current Mode: {theme.mode}</h2>
        </div>
    )
}