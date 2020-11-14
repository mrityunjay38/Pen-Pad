import actionTypes from "../types/actionTypes";
const { MODAL, SHOW_HIDE_MODAL, RESET_MODAL } = actionTypes;

export const modal = (modalProps) => {
  return (dispatch) => {
    const action = {
      type: MODAL,
      modalProps,
    };
    dispatch(resetModal());
    dispatch(action);
    dispatch(showHideModal(true));
  };
};

export const showHideModal = (visibility) => {
  return {
    type: SHOW_HIDE_MODAL,
    visibility,
  };
};

export const resetModal = () => {
  const initState = {
    header: "Header",
    message: "Add your message",
    onCancel: () => null,
    onOk: () => null,
    children: null,
    visibility: false,
  };

  return {
    type: RESET_MODAL,
    initState,
  };
};
