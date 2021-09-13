// import React from 'react'; react version >16

function Content(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <button onClick={()=> props.changeTitle('Test Title from Content function :D')}>Change Title</button>
        </>
    )
}


export default Content;