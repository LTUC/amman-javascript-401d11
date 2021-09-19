import React from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
    const state = {
        title: 'My Site',
        twitter: 'Ibrahem0_0omari'
    }
    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}