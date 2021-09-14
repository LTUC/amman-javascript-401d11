import {useState, useEffect} from 'react';

function People() {

    const [people, setPeople] = useState([]);
    const [name, setName] = useState('');

    const inputHandler = (e) => {
        setName(e.target.value);
    }

    const addPerson = (e) => {
        e.preventDefault();
        e.target.reset();
        setPeople([...people, name]);
    }

    // This will run on every re-render of this component
    useEffect(()=> {
        console.log("%c I RUN ON EVERY RE-RENDER", 'background:#ccc; color:red');
    });
    // This will run only when the name changes
    useEffect(()=> {
        console.log(`%c I RUN ON PEOPLE CHANGE: ${people}` , 'background:#000; color:purple');
    }, [people]);

    // when name or people are changed 
    useEffect(()=> {
        console.log("I RUN ON NAME, PEOPLE CHANGE: ", name);
    }, [name, people]);

    // run once on initial rendering 
    // can be a good case to do a GET request form an API
    useEffect(()=> {
        console.log("Initial loading ", name);
    }, []);

    //UNMOUNT
    useEffect(()=> {
        return (()=> {
            console.log("%c Component unmounted !!", "background:yellow; color:black")
        })
    });


    return (
        <div>
            <h1>{name}</h1>
            <form onSubmit={addPerson}>
                <input onChange={inputHandler}/>
            </form>
            {
                people.map((item, idx)=> {
                   return <div key={idx}>{item}</div>
                })
            }
        </div>

    )
}

export default People;