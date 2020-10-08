import actionTypes from '../types/actionTypes';
const { VERTICAL_VIEW } = actionTypes;

export const viewVertical = () => {
    return {
        type: VERTICAL_VIEW
    }
}