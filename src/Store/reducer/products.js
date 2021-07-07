import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  UPDATE_PRODUCT,
} from "./../action/actions";

const initialState = [];

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case GET_ALL_PRODUCTS:
      return payload;
    case ADD_PRODUCT:
      const products = [...state, payload];
      return products;
    case DELETE_PRODUCT:
      return payload;
    case UPDATE_PRODUCT:
      return payload;
    default:
  }
  return state;
};

export default reducer;
