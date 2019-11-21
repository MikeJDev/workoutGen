import { ADD_TODO } from "../actionTypes";

const initialState = {
  app: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return action.payload;
    default:
      return state;
  }
};
