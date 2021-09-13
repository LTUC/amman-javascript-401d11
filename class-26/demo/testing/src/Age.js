import {useState} from 'react';

function Age(props) {
    const [name, setName] = useState('default-person');
    const [age, setAge] = useState( props.age || 0 )
    
    function changehandler(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <h2 data-testid="name">{name} is {age}</h2>
            <input onChange={changehandler}/>
        </div>
    )
}

export default Age;