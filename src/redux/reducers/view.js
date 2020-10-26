import actionTypes from '../types/actionTypes';
const { VIEW_CHANGE, LANDSCAPE_VIEW, SCALE_CHANGE } = actionTypes;

const initState = {
    viewType: LANDSCAPE_VIEW,
    zoom: 1
}

const view = (state = initState, action) => {
    switch(action.type){
        case VIEW_CHANGE:
            return {...state, viewType: action.view};
        case SCALE_CHANGE:
            return {...state, zoom: action.scale}    
        default:
            return state;
    }
}

export default view;