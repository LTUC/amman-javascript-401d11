import People from './components/people';
import {Provider} from 'react-redux';
import rtkStore from './rtk-store/';
export default props => {
    return (
        <Provider store={rtkStore}>
             <People/>
        </Provider>
    )
}