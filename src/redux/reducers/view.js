import actionTypes from '../types/actionTypes';
const { VIEW_CHANGE} = actionTypes;

const initState = {
    viewType: 'vertical'
}

const view = (state = initState, action) => {
    switch(action.type){
        case VIEW_CHANGE:
            return {...state, viewType: action.view};
        default:
            return state;
    }
}

export default view;