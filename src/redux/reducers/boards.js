import actionTypes from '../types/actionTypes';
const { CREATE_NEW_BOARD } = actionTypes;

const whiteBoards = (boards = [1], action) => {
    switch(action.type){
        case CREATE_NEW_BOARD:
            return [...boards, boards[boards.length - 1] + 1]
        default:
            return boards;
    }
}

export default whiteBoards;