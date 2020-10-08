import actionTypes from '../types/actionTypes';
const { VERTICAL_VIEW } = actionTypes;

const initState = {
    viewType: 'vertical'
}

const view = (state = initState, action) => {
    switch(action.type){
        case VERTICAL_VIEW:
            return {...state, viewType: 'vertical'};
        default:
            return state;
    }
}

export default view;