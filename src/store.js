import {createStore} from 'redux';
import data from './data.json';
import taskReducer from './reducers/reducer';

function configureStore(state={tasks:data}){
    return createStore(taskReducer, state);
}

export default configureStore;