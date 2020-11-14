import actionTypes from '../types/actionTypes';
const { MODAL, SHOW_HIDE_MODAL, RESET_MODAL } = actionTypes;

const modal = (modal = {}, action) => {
    switch(action.type) {
        case MODAL:
            return {...modal, ...action.modalProps};
        case RESET_MODAL:    
            return {...action.initState};
        case SHOW_HIDE_MODAL:   
            return {...modal, visibility: action.visibility};
        default:
            return modal;
    }
}

export default modal;