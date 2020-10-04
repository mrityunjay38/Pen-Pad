import { createStore, combineReducers } from 'redux';
import boards from '../redux/reducers/boards';

const store = createStore(combineReducers({
    boards
}));

export default store;