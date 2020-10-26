import actionTypes from '../types/actionTypes';
const { VIEW_CHANGE, SCALE_CHANGE } = actionTypes;

export const viewChanger = (view) => {
    return {
        type: VIEW_CHANGE,
        view
    }
}

export const changeScale = (scale) => {
    return {
        type: SCALE_CHANGE,
        scale
    }
}