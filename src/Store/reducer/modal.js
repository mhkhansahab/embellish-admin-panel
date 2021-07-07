import { EDIT_STATUS_CHANGER, MODAL_DATA_CLEANER, MODAL_DATA_EDITOR } from "./../action/actions";

const initialState = {
  isEdit : false,
  data : []
};

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case MODAL_DATA_EDITOR:
      return {
        ...state,
        data : payload,
      }
    case MODAL_DATA_CLEANER:
      return {
        ...state,
        data : payload
      }
    case EDIT_STATUS_CHANGER:
      return{
        ...state,
        isEdit : payload
      }
    default:
  }
  return state;
};

export default reducer;
