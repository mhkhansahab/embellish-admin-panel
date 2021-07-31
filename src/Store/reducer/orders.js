import { SET_COMPLETED_ORDERS, SET_PENDING_ORDERS } from "../action/actions";

const initialState = {
  pendingOrders: null,
  completedOrders: null,
};

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_COMPLETED_ORDERS:
      return {
        ...state,
        completedOrders: payload,
      };
    case SET_PENDING_ORDERS:
      return {
        ...state,
        pendingOrders: payload,
      };
    default:
  }
  return state;
};

export default reducer;
