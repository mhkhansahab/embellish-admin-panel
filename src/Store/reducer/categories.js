import {
  GET_ALL_CATEGORIES,
  DELETE_CATEGORY,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
} from "./../action/actions";

const initialState = [];

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case GET_ALL_CATEGORIES:
      return payload;
    case ADD_CATEGORY:
      const category = [...state, payload];
      return category;
    case UPDATE_CATEGORY:
      return payload;
    case DELETE_CATEGORY:
      return payload;
    default:
  }
  return state;
};

export default reducer;
