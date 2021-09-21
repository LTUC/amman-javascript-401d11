import LoginProvider from "./components/context";
import Login from './components/login';
import Auth from './components/auth';

export default function App(props) {
    return (
        <LoginProvider>
            <Login/>
            <Auth capability="read">
                <div>
                    <h2>List of Items ...</h2>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                 </div>
            </Auth>
            <Auth capability="update">
                <button>Update Button</button>
            </Auth>
            <Auth capability="create">
                <button>+ Create Button</button>
            </Auth>
            <Auth capability="delete">
                <button>Delete Button</button>
            </Auth>
           
        </LoginProvider>
    )
}