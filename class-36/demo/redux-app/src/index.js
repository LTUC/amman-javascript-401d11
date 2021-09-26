import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from 'react-redux';
import store from './store/'; // ./store/index.js';

function Main() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

ReactDOM.render(<Main/>, document.getElementById("root"));