import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import boards from '../redux/reducers/boards';
import view from '../redux/reducers/view';
import modal from '../redux/reducers/modal';

const store = createStore(combineReducers({
    boards,
    view,
    modal
}), applyMiddleware(thunk));

export default store;