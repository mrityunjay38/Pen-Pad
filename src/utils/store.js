import { createStore, combineReducers } from 'redux';
import boards from '../redux/reducers/boards';
import view from '../redux/reducers/view';

const store = createStore(combineReducers({
    boards,
    view
}));

export default store;