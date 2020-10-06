import actionTypes from '../types/actionTypes';
const { CREATE_NEW_BOARD } = actionTypes;

export const createNewBoard = (board) => {
    return {
        type: CREATE_NEW_BOARD,
        board
    }
}