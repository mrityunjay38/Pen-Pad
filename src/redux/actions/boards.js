import actionTypes from '../types/actionTypes';
const { CREATE_NEW_BOARD } = actionTypes;

export const createNewBoard = () => {
    return {
        type: CREATE_NEW_BOARD
    }
}