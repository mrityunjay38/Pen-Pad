import actionTypes from '../types/actionTypes';
const { VIEW_CHANGE } = actionTypes;

export const viewChanger = (view) => {
    return {
        type: VIEW_CHANGE,
        view
    }
}