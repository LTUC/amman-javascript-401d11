import React, {useState} from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
   
    const [twitter, setTwitter] = useState('Ibrahem0_0omari');
    const [title, setTitle] = useState('My Site');
    const state = {
        title ,
        twitter, 
        setTwitter,
        setTitle
    }
    // state = {
    //     title:title ,
    //     twitter:twitter, 
    //     setTwitter:setTwitter,
    //     setTitle:setTitle
    // }
    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}