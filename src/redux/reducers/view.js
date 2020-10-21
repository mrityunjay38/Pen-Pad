import actionTypes from '../types/actionTypes';
const { VIEW_CHANGE, LANDSCAPE_VIEW } = actionTypes;

const initState = {
    viewType: LANDSCAPE_VIEW
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