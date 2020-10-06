import actionTypes from '../types/actionTypes';
const { CREATE_NEW_BOARD } = actionTypes;

const whiteBoards = (boards = [], action) => {
    switch(action.type){
        case CREATE_NEW_BOARD:
            return [...boards, action.board]
        default:
            return boards;
    }
}

export default whiteBoards;