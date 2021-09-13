import React, { useState } from 'react';
import Content from './contnent-fnt';

function App() {
    // Hooks : functional compoenents
    const [state, setState] = useState({msg: 'Hello from Function App!! '});

    function changeTitle(title) {
        setState({msg: title});
    }

    return (
        <Content title={state.msg} changeTitle={changeTitle}/>
    )
}

export default App;